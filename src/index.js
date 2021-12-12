import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import { Auth0Provider } from '@auth0/auth0-react';
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
            <Route index element={<Home />} />
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
