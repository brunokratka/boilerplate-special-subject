import ReactGA from 'react-ga';

function logPageView() {
  ReactGA.initialize('UA-******-*');
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
}

export default logPageView;