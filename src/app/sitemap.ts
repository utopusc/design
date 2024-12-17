import { getBlogPosts } from "@/lib/portfolio";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getBlogPosts();
  const headersList = headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allPosts.map((post) => ({
      url: `${protocol}://${domain}/portfolio/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
