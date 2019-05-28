export const routes = {
  home: '/',
  notes: '/notes',
  note: '/notes/details/:id',
  twitters: '/twitters',
  twitter: '/twitters/details/:id',
  articles: '/articles',
  article: '/articles/details/:id',
  firms: '/firms',
  firm: '/firms/details/:id',
  login: '/login',
  new: '/:pageType(twitters|notes|articles)/new',
};
