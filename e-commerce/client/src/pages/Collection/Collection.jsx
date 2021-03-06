import React from 'react';
import {CollectionItem} from '../../components';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './styles';
import { useSelector } from 'react-redux';

const CollectionPage = () => {
  const collectionId = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer> 
    </CollectionPageContainer>
  );
};


export default CollectionPage;