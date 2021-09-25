import React, { useEffect } from "react";
import { CollectionsOverview, Spinner } from "../../components";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state))
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
