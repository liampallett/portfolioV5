import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Liam Pallett | Blog",
    description: "My journey as a software engineer",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("../blog/posts/*.md")),
    customData: `<language>en-GB</language>`,
  });
}
