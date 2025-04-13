import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  const items = await pagesGlobToRssItems(import.meta.glob("../**/*.md"));
  console.log("RSS items:", items.length);

  return rss({
    title: "Liam Pallett | Blog",
    description: "My journey as a software engineer",
    site: context.site,
    items,
    customData: `<language>en-GB</language>`,
  });
}
