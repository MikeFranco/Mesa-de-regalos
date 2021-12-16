import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutSections } from './components/AboutSections';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from './pages/Layout';
import EventsLayout from './pages/EventsLayout';
import Shop from './pages/Shop';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import bebe from './assets/img/bebe.jpg';
import nino from './assets/img/nino.jpg';
import principal from './assets/img/principal.jpg';
import novia from './assets/img/novia.jpg';
import novio from './assets/img/novio.jpg';
import quinceañera from './assets/img/quinceañera.jpg';
import graduado from './assets/img/graduado.jpg';
import 'antd/dist/antd.css';

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
                  headerImg='boda'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca de la novia',
                        bottomP:
                          'Padres de la novia: Antonio Rodriguez y Berenice Espinoza',
                        img: novia
                      }}
                      secondSection={{
                        title: 'Acerca del novio',
                        bottomP:
                          'Padres de la novia: Ricardo González y Claudia Mendoza',
                        img: novio
                      }}
                    />
                  }
                />
              }
            />
            <Route
              path='xv'
              element={
                <EventsLayout
                  mainTitle='Mis XV años'
                  subTitle='Alicia'
                  headerImg='xv'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca de la quinceañera',
                        bottomP:
                          'Padres de la quinceañera: Antonio Rodriguez y Berenice Espinoza',
                        img: quinceañera
                      }}
                    />
                  }
                />
              }
            />
            <Route
              path='bautizo'
              element={
                <EventsLayout
                  mainTitle='Mi bautizo'
                  subTitle='Ricardo'
                  headerImg='bautizo'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca del bebé',
                        bottomP:
                          'Padres del bebé: Antonio Rodriguez y Berenice Espinoza',
                        img: bebe
                      }}
                    />
                  }
                />
              }
            />
            <Route
              path='fiestas'
              element={
                <EventsLayout
                  mainTitle='Te invito a mis 3 años'
                  subTitle='Alejandrito'
                  headerImg='fiesta'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca del cumpleañero',
                        bottomP:
                          'Padres del niño: Antonio Rodriguez y Berenice Espinoza',
                        img: nino
                      }}
                    />
                  }
                />
              }
            />
            <Route
              path='para-ella'
              element={
                <EventsLayout
                  mainTitle='Mi cumpleaños'
                  subTitle='Alejandra'
                  headerImg='cumple'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca de la festejada',
                        bottomP:
                          'Padres de la novia: Antonio Rodriguez y Berenice Espinoza',
                        img: novia
                      }}
                    />
                  }
                />
              }
            />
            <Route
              path='para-el'
              element={
                <EventsLayout
                  mainTitle='Mi graduación'
                  subTitle='Mario'
                  headerImg='graduacion'
                  aboutSection={
                    <AboutSections
                      firstSection={{
                        title: 'Acerca del graduado',
                        bottomP:
                          'Padres de la novia: Antonio Rodriguez y Berenice Espinoza',
                        img: graduado
                      }}
                    />
                  }
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
