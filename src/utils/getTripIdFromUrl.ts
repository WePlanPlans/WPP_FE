export const getTripIdFromUrl = () => {
  const pathSegments = window.location.pathname.split('/');
  const tripIdIndex =
    pathSegments.findIndex((segment) => segment === 'trip') + 1;
  const tripId = pathSegments[tripIdIndex];
  return tripId ? parseInt(tripId, 10) : 0;
};
