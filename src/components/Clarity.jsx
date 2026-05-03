import { useEffect } from 'react';

/**
 * Microsoft Clarity behavior analytics — session recordings, heatmaps,
 * scroll depth, time-on-page. The project ID is public (it's served to every
 * browser anyway), so hardcoded with an env-var override for flexibility.
 */
const DEFAULT_PROJECT_ID = 'wlff6gj5jh';

export default function Clarity() {
  const projectId =
    import.meta.env.VITE_CLARITY_PROJECT_ID || DEFAULT_PROJECT_ID;

  useEffect(() => {
    if (!projectId || typeof window === 'undefined') return;
    if (window.clarity) return; // already initialized

    // Standard Clarity install snippet (translated to a useEffect)
    /* eslint-disable */
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);
    /* eslint-enable */
  }, [projectId]);

  return null;
}
