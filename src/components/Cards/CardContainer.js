

import Card from './Card';
import {getResources} from '@/utils/contentful';

export default async function CardContainer({ category }) {

  const resources = await getResources();


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-3 md:mt-10">
      {resources.map((resource) => {
        if (category === resource.tag) {
          return <Card key={resource.slug} resource={resource} />;
        } else if (category === undefined) {
          return <Card key={resource.slug} resource={resource} />;
        }
      })}
    </div>
  );
}
