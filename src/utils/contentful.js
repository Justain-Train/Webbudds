import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const fetchContentfulData = async (query) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = res.json();
  return data;
};

export const getResources = async () => {
  let query = `   {
      resourcesCollection {
        items  {
          sys   {
             id
            }
          title
          slug
          description
          tag
          overview
          source
          thumbnail  {
            url
          }
        }
       }
    }`;

  const res = await fetchContentfulData(query);
  const resources = res.data.resourcesCollection.items || [];

  return resources;
};
