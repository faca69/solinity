import { MetadataRoute } from "next";

const BASE_URL = "https://www.solinity.xyz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${BASE_URL}/tokens`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/advertise`,
      lastModified: new Date().toISOString(),
    },
  ];
}
