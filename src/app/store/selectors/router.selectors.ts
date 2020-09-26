import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';
import { RouterStateUrl, RouterStoreState } from '../models/router.models';

export const getRouter = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

export const getRouterState = createSelector(
  getRouter,
  (router: RouterStoreState) => router?.state
);

export const getRouteParams = createSelector(
  getRouterState,
  (state: RouterStateUrl) => state?.params // /heroes/1
);

export const getRouteQueryParams = createSelector(
  getRouterState,
  (state: RouterStateUrl) => state?.queryParams // /heroes?id=1
);
