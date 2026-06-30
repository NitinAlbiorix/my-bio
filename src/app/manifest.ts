import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nitin Dabhi — Portfolio",
    short_name: "Nitin",
    description: "Senior Software Engineer portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1117",
    theme_color: "#ff8c42",
  };
}
