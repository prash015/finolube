import { useEffect } from "react";
import homeContent from "./templates/home-content.html?raw";
import { loadLegacyScripts } from "./legacyScripts";

const PAGE_TITLE = "Finolube | Premium Engine Oils";

function App() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    loadLegacyScripts()
      .then(() => {
        if (window.jQuery) {
          window.jQuery(window).trigger("load");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: homeContent }} />;
}

export default App;
