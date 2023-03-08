const ROUTES = {
  HOME: '/',
  CATEGORIES: '/categories',
  SEARCH: '/search',
  CATEGORY: (id: string) => `/categories/${id}`,
  PLAYLIST: (id: string) => `/playlist/${id}`,
};

export default ROUTES;
