

import Card from './Card';
import {getResources} from '@/utils/contentful';
import React from 'react';

export default async function CardContainer({ category }) {
  const resources = await getResources();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-3 md:mt-10">
      {resources.map((resource) => (
        category === resource.tag || category === undefined  ? (
          <Card key={resource.slug} resource={resource} />
        ) : null
      ))}
    </div>
  );
}
