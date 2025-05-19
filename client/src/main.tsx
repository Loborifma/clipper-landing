import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import featureImage from "./components/ui/feature.png";

// Add custom meta tags for SEO
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "Video Cliper helps social media managers, influencers, and small business owners instantly create perfectly-sized vertical videos for Instagram, TikTok, YouTube Shorts by reformatting long-form videos.";
document.head.appendChild(meta);

// Add title
const title = document.createElement("title");
title.textContent = "Video Cliper - Instantly Create Perfect Vertical Videos";
document.head.appendChild(title);

// Add favicon
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = featureImage;
document.head.appendChild(icon);

createRoot(document.getElementById("root")!).render(<App />);
