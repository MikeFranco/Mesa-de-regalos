import { useState } from 'react';
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const { SubMenu } = Menu;

const Layout = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [currentTab, setCurrentTab] = useState({
    current: 'event:1'
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
        <SubMenu key='SubMenu' title='Eventos'>
          <Menu.Item key='event:1'>
            <Link to='/boda'>Boda Diana y Rodrigo</Link>
          </Menu.Item>
          <Menu.Item key='event:2'>
            <Link to='/xv'>XV Alicia</Link>
          </Menu.Item>
          <Menu.Item key='event:3'>
            <Link to='/bautizo'>Bautizo Ricardo</Link>
          </Menu.Item>
          <Menu.Item key='event:4'>
            <Link to='/fiestas'>Fiesta Alejandrito</Link>
          </Menu.Item>
          <Menu.Item key='event:5'>
            <Link to='/para-ella'>Cumpleaños Alejandra</Link>
          </Menu.Item>
          <Menu.Item key='event:6'>
            <Link to='/para-el'>Graduación Mario</Link>
          </Menu.Item>
        </SubMenu>
        {!isAuthenticated && (
          <Menu.Item key='login' onClick={() => loginWithRedirect()}>
            Login
          </Menu.Item>
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
