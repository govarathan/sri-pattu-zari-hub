import { useEffect } from "react";

/**
 * SeoHead component updates document head dynamically for SEO title, description,
 * keywords, canonical link, OpenGraph tags, and JSON-LD Structured Data.
 */
export default function SeoHead({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogImage = "https://govarathan.github.io/sri-pattu-zari-hub/images/sri_pattu_logo.png",
  schemaData = null,
}) {
  const baseUrl = "https://govarathan.github.io/sri-pattu-zari-hub";
  const fullUrl = `${baseUrl}${canonicalPath ? "/#" + canonicalPath : ""}`;

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper to update or set meta tag
    const setMeta = (name, content, attribute = "name") => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Meta Description & Keywords
    setMeta("description", description);
    setMeta("keywords", keywords);

    // 3. OpenGraph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:type", "website", "property");

    // 4. Twitter Cards
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // 6. Dynamic JSON-LD Schema
    let script = document.getElementById("dynamic-jsonld");
    if (schemaData) {
      if (!script) {
        script = document.createElement("script");
        script.id = "dynamic-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    } else if (script) {
      script.remove();
    }
  }, [
    title,
    description,
    keywords,
    canonicalPath,
    ogImage,
    schemaData,
    fullUrl,
  ]);

  return null;
}
