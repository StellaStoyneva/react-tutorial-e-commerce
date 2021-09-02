import React, {useState} from 'react';
import { CollectionsOverview } from '../../components';
import { Route } from 'react-router-dom';

import CollectionPage from '../Collection/Collection';

export const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
