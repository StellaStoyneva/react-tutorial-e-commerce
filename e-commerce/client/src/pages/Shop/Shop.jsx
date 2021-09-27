import React, { useEffect, Suspense, lazy } from "react";
import { Spinner } from "../../components";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionsOverview = lazy(() =>
  import("../../components/CollectionsOverview/CollectionsOverview")
);

const CollectionPage = lazy(() =>
  import("../Collection/Collection")
);

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="shop-page">
      <Suspense fallback={<Spinner/>}>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Suspense>
    </div>
  );
};

export default Shop;
