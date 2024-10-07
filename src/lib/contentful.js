import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(contentType) {
  const entries = await client.getEntries({ content_type: contentType });

  if (entries.items) {
    return entries.items;
  }

  throw new Error(`Error fetching entries for ${contentType}`);
}
