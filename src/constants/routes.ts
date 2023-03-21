const ROUTES = {
  HOME: '/',
  CATEGORIES: '/categories',
  SEARCH: '/search',
  SEARCH_SONG: '/search/song',
  SEARCH_ARTIST: '/search/artist',
  CATEGORY: (id: string) => `/categories/${id}`,
  PLAYLIST: (id: string) => `/playlist/${id}`,
};

export default ROUTES;
