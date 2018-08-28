import Router from 'next/router'

Router.router = {
  push: (url) => {
    console.log(`PUSH: ${url}`)
    return Promise.resolve()
  },
  prefetch: () => console.log('prefetch'),
  replace: () => console.log('replace'),
  go: () => console.log('go'),
  createHref: () => console.log('createHref'),
  createLocation: () => console.log('createLocation'),
  isActive: () => console.log('isActive'),
  matcher: {
    match: () => console.log('match'),
    getRoutes: () => console.log('getRoutes'),
    isActive: () => console.log('isActive'),
    format: () => console.log('format'),
  },
  addTransitionHook: () => console.log('addTransitionHook'),
};
