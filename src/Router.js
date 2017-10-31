import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
// methods
import gaPageView 	from './resources/methods/pageView';

// CSS libs and polyfills
import objectFitImages from 'object-fit-images';
import './resources/styles/normalize.min.css';
import './resources/styles/main.css';
import { Theme } from './Router-style';

// Routes imports
import Components from './routes/components/Components.jsx';
import NavBar     from './components/navbar/NavBar.jsx';

objectFitImages();
moment.locale('pt-br');

//Url da marca de acordo com a matéria especial
const logo = `${process.env.PUBLIC_URL}/img/capa/logo-negativa.png`;

const links = [
  {path: "/", name: "Components"}
]

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Theme>
        <Route component={ScrollToTop}/>
        <Route path="/" component={gaPageView}/>
        <header>
          <NavBar 
            links={links}
            especial={logo}
          />
        </header>

        <main>
          <Route exact path="/" component={Components}/>
        </main>
      </Theme>
    </Router>
  );
}

export default Routes;
