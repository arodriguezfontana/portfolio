/**
 * Utility to resolve static asset paths for GitHub Pages subfolder deployment (/portfolio)
 * and local development (/).
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  // Avoid double prefixing
  if (path.startsWith('/portfolio/')) return path;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (typeof window !== 'undefined') {
    // If running in browser on GitHub Pages or if URL path contains /portfolio
    const isGitHubPages =
      window.location.hostname.includes('github.io') ||
      window.location.pathname.startsWith('/portfolio');
    return isGitHubPages ? `/portfolio${cleanPath}` : cleanPath;
  }

  // During SSR / static prerender
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? `/portfolio${cleanPath}` : cleanPath;
};
