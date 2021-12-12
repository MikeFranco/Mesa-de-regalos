import { useState } from 'react';
import { Menu, Button } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const { SubMenu } = Menu;

const Layout = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [currentTab, setCurrentTab] = useState({
    current: 'home'
  });

  const handleClick = e => {
    console.log('click ', e);
    setCurrentTab({ current: e.key });
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[currentTab]}
        mode='horizontal'
        theme='dark'>
        <Menu.Item key='home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        {!isAuthenticated && (
          <Menu.Item onClick={() => loginWithRedirect()}>Login</Menu.Item>
        )}
        {isAuthenticated && (
          <>
            <Menu.Item key='shop'>
              <Link to='/shop'>Comprar Regalos</Link>
            </Menu.Item>
            <Menu.Item
              key='login'
              onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </Menu.Item>
          </>
        )}
        {isAuthenticated && (
          <>
            <img
              src={user.picture}
              alt=''
              style={{ width: '2.9rem', height: '2.9rem', marginRight: '1rem' }}
            />
            <span>{user.name}</span>
          </>
        )}
      </Menu>
      <Outlet />
    </>
  );
};

export default Layout;
