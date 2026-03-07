import { useEffect, useMemo } from "react";
import homeContent from "./templates/home-content.html?raw";
import aboutContent from "./templates/about-content.html?raw";
import contactContent from "./templates/contact-content.html?raw";
import { loadLegacyScripts } from "./legacyScripts";

const PAGE_MAP = {
  "/": {
    title: "Finolube | Premium Engine Oils",
    content: homeContent
  },
  "/index.html": {
    title: "Finolube | Premium Engine Oils",
    content: homeContent
  },
  "/aboutus.html": {
    title: "Finolube | About Us",
    content: aboutContent
  },
  "/about.html": {
    title: "Finolube | About Us",
    content: aboutContent
  },
  "/contact.html": {
    title: "Finolube | Contact",
    content: contactContent
  }
};

function App() {
  const page = useMemo(() => {
    const pathname = window.location.pathname.toLowerCase();
    return PAGE_MAP[pathname] || PAGE_MAP["/"];
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = page.title;

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
  }, [page.title]);

  return <div dangerouslySetInnerHTML={{ __html: page.content }} />;
}

export default App;
