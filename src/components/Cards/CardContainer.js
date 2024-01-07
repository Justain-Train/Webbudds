import Card from './Card';
import {getResources} from '@/utils/contentful';


export default async function CardContainer() {
  const resources = await getResources();
  console.log(resources);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10">
      {resources.map((resource) => {
        return (
        <Card key={resource.sys.id} resource={resource}/>
      )})}
    </div>
  );
}
