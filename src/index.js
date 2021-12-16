import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import EventsLayout from './pages/EventsLayout';
import Shop from './pages/Shop';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import { Auth0Provider } from '@auth0/auth0-react';
import 'antd/dist/antd.css';
import principal from './assets/img/principal.jpg';
const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID } = process.env;

export default function App() {
  return (
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Home />}></Route>
            <Route
              path='boda'
              element={
                <EventsLayout
                  mainTitle='Nuestra boda'
                  subTitle='Diana & Rodrigo'
                  headerImg={principal}
                />
              }
            />
            <Route
              path='xv'
              element={
                <EventsLayout
                  mainTitle='Mis XV años'
                  subTitle='Alicia'
                  headerImg={principal}
                />
              }
            />
            <Route
              path='bautizo'
              element={
                <EventsLayout
                  mainTitle='Mi bautizo'
                  subTitle='Ricardo'
                  headerImg={principal}
                />
              }
            />
            <Route
              path='fiestas'
              element={
                <EventsLayout
                  mainTitle='Te invito a mis 3 años'
                  subTitle='Alejandrito'
                  headerImg={principal}
                />
              }
            />
            <Route
              path='para-ella'
              element={
                <EventsLayout
                  mainTitle='Mi cumpleaños'
                  subTitle='Alejandra'
                  headerImg={principal}
                />
              }
            />
            <Route
              path='para-el'
              element={
                <EventsLayout
                  mainTitle='Mi graduación'
                  subTitle='Mario'
                  headerImg={principal}
                />
              }
            />
            <Route path='shop' element={<Shop />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
