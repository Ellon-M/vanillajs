type RouteType = {
    [key: string]: string
};

/* global home, about */

const routes: RouteType = {
  '/': home,
  '/about': about,
};

const rootDiv: HTMLElement = document.getElementById('root')!;
const path: keyof RouteType = window.location.pathname;
rootDiv.innerHTML = routes[path];

const onNavigate = (pathname: string) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
