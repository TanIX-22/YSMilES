const basePath = '/YSMilES';

export function withBasePath(path: string) {
  if (!path.startsWith('/') || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}