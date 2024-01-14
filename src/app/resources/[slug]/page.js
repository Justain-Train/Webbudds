
import { getResources } from "@/utils/contentful";



export default async function ResourcesOverview({params}) {
  const resources = params;
  const res = await getResources();
  let overview = "";


  res.map((res) => {
    if (res.slug === resources.slug) {
       overview = res.overview;
    }
  })

  console.log(overview);

  return (
    <div>
      <h1>{overview}</h1>
    </div>
  );
}