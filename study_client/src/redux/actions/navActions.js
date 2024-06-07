export const NAVIGATION_ROUTE= "NAVIGATION_ROUTE";

export const navigationRoute = (route) => ({
    type: NAVIGATION_ROUTE,
    payload: route,
  });