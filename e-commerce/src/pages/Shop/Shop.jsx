import React, {useState} from 'react';
import { CollectionPreview } from '../../components';
import { SHOP_DATA } from '../../mocked-data';

export function Shop() {
    const [collections, setCollections] = useState(SHOP_DATA)

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  
}
