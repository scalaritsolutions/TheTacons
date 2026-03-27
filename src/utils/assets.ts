/**
 * Prepends the BASE_URL to the given asset path.
 * This ensures images load correctly when the app is deployed to a subdirectory (e.g., GitHub Pages).
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path and trailing slash from base to join safely
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};
