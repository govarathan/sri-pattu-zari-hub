/**
 * Helper function to construct full asset image URLs compatible with
 * Vite base path (`base: '/sri-pattu-zari-hub/'`), HashRouter, and GitHub Pages.
 */
export function getImageUrl(path) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  // Get Vite's configured base URL (defaults to '/' in dev or '/sri-pattu-zari-hub/' in build)
  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base : base + "/";

  // Prevent duplicate prefixing if path already starts with base or prefix
  if (base !== "/" && (path.startsWith(base) || path.startsWith(prefix))) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return prefix + cleanPath;
}
