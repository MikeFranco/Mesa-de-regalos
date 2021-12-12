import { Row, Col } from 'antd';
import '../index.css';
import principal from '../assets/img/principal.jpg';

const Home = () => {
  return (
    <div
      clasName='nuestra-boda'
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${principal})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh'
      }}>
      <Row justify='center'>
        <Col span={5}>
          {' '}
          <h2 className='text-white'>Nuestra Boda</h2>
          <h2 className='text-importante'>Diana &amp; Steve</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
