import { spawnSync } from 'node:child_process';
import { access, cp, mkdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'out');
const rootExportDir = path.join(projectRoot, '.pages-root-export');
const repoExportDir = path.join(projectRoot, '.pages-repo-export');
const nextCli = path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

function runBuild(basePath) {
  const env = { ...process.env };

  if (basePath) {
    env.NEXT_PUBLIC_BASE_PATH = basePath;
  } else {
    delete env.NEXT_PUBLIC_BASE_PATH;
  }

  const result = spawnSync(process.execPath, [nextCli, 'build'], {
    cwd: projectRoot,
    env,
    stdio: 'inherit',
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`Next.js build failed with exit code ${result.status ?? 'unknown'}`);
  }
}

await Promise.all([
  rm(outputDir, { recursive: true, force: true }),
  rm(rootExportDir, { recursive: true, force: true }),
  rm(repoExportDir, { recursive: true, force: true }),
]);

try {
  console.log('Building the custom-domain root site...');
  runBuild('');
  await rename(outputDir, rootExportDir);

  console.log('Building the GitHub repository-path preview...');
  runBuild('/YSMilES');
  await rename(outputDir, repoExportDir);

  await rename(rootExportDir, outputDir);
  await mkdir(path.join(outputDir, 'YSMilES'), { recursive: true });
  await cp(repoExportDir, path.join(outputDir, 'YSMilES'), { recursive: true });
  console.log('Combined both static exports in out/.');
} catch (error) {
  if (await access(rootExportDir).then(() => true, () => false)) {
    await rm(outputDir, { recursive: true, force: true });
    await rename(rootExportDir, outputDir);
  }
  throw error;
} finally {
  await Promise.all([
    rm(rootExportDir, { recursive: true, force: true }),
    rm(repoExportDir, { recursive: true, force: true }),
  ]);
}
