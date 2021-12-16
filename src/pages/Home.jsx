import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <Row
        justify='center'
        style={{
          textAlign: 'center'
        }}>
        <Col span={20}>
          <h3>Mesa de regalos</h3>
        </Col>
        <Col span={24} style={{ margin: '0.2rem' }}>
          <Button onClick={() => !isAuthenticated ? loginWithRedirect() : null}>
            <Link to='/boda'>Buscar mesas de regalos</Link>
          </Button>
        </Col>
        <Col span={24} style={{ margin: '0.2rem' }}>
          <Button disabled> Crear mesa de regalos</Button>
        </Col>
      </Row>
    </>
  );
};

export default Home;
