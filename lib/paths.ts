const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/YSMilES' : '');

export function withBasePath(path: string) {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  if (!repoBasePath) {
    return path;
  }

  if (path.startsWith(repoBasePath)) {
    return path;
  }

  return `${repoBasePath}${path.startsWith('/') ? path : `/${path}`}`;
}