import { createClient } from "contentful";

//Accessing environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const useContentful = (contentType) => {
  const client = createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    space: REACT_APP_SPACE_ID,
    accessToken: REACT_APP_CDA_TOKEN,
  });

  const getdata = async () => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        //select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const { sys, fields } = item;
        const { id } = sys;
        const image = fields.image.fields.file.url;
        return {
          ...item.fields,
          image,
          id,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return getdata;
};

export default useContentful;
