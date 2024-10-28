import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: '9umjzcc54p7k',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export function useFetchProjects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  async function getData() {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      const project = response.items.map((response) => {
        const { title, url, image } = response.fields;
        const img = image?.fields?.file?.url;
        const id = response.sys.id;

        return { title, url, img, id };
      });

      setProjects(project);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
}
