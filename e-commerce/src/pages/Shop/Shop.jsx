import React, { useEffect } from "react";
import { CollectionsOverview, Spinner } from "../../components";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";
import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const Shop = ({ match, fetchCollectionsStart, isLoading }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
