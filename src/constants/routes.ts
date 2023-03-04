const ROUTES = {
  HOME: '/',
  CATEGORIES: '/categories',
  CATEGORY: (id: string) => `/categories/${id}`,
  PLAYLIST: (id: string) => `/playlist/${id}`,
};

export default ROUTES;
