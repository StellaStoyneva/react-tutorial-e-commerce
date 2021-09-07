import React, { useEffect, useState } from "react";
import { CollectionsOverview, Spinner } from "../../components";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from "reselect";

export const Shop = ({ match, fetchCollectionsStartAsync, isLoading }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
