const LEGACY_SCRIPT_SOURCES = [
  "/js/jquery.js",
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.mCustomScrollbar.concat.min.js",
  "/js/magnific-popup.min.js",
  "/js/appear.js",
  "/js/parallax.min.js",
  "/js/tilt.jquery.min.js",
  "/js/jquery.paroller.min.js",
  "/js/owl.js",
  "/js/wow.js",
  "/js/odometer.js",
  "/js/backToTop.js",
  "/js/jquery-ui.js",
  "/js/cursor-script.js",
  "/js/script.js"
];

let scriptsLoadingPromise;

function appendScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-legacy-src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.legacySrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load legacy script: ${src}`));
    document.body.appendChild(script);
  });
}

export function loadLegacyScripts() {
  if (!scriptsLoadingPromise) {
    scriptsLoadingPromise = LEGACY_SCRIPT_SOURCES.reduce(
      (chain, src) => chain.then(() => appendScript(src)),
      Promise.resolve()
    );
  }

  return scriptsLoadingPromise;
}
