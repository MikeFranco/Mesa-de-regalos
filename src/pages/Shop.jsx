import { Row, Col } from 'antd';
import principal from '../assets/img/principal.jpg';
import batidora from '../assets/img/batidora.jpg';
import hornoelectrico from '../assets/img/hornoelectrico.jpg';
import licuadora from '../assets/img/licuadora.jpg';
import microondas from '../assets/img/microondas.jpg';
import plancha from '../assets/img/plancha.jpg';
import sandwichera from '../assets/img/sandwichera.jpg';

const Shop = () => {
  return (
    <Row className='containter-fluid' justify='center'>
      <Col
        span={24}
        style={{
          height: '50vh',
          width: '50vw',
          backgroundImage: `url(${principal})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}>
        <Row justify='center'>
          <Col
            style={{
              paddingTop: '10vh',
              textAlign: 'center'
            }}>
            <h2 className='header-text'>Mesa de regalos de</h2>
            <h2 className='header-text'>Diana &amp; Rodrigo</h2>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify='center' style={{ width: '100vw', textAlign: 'center' }}>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={batidora}
                  style={{
                    width: '50%'
                  }}
                  alt='batidora'
                />
              </Col>
              <Col span={24}>
                <h4>Batidora</h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={hornoelectrico}
                  style={{
                    width: '50%'
                  }}
                  alt='hornoelectrico'
                />
              </Col>
              <Col span={24}>
                <h4>hornoelectrico</h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={licuadora}
                  style={{
                    width: '50%'
                  }}
                  alt='licuadora'
                />
              </Col>
              <Col span={24}>
                <h4>licuadora</h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={microondas}
                  style={{
                    width: '50%'
                  }}
                  alt='microondas'
                />
              </Col>
              <Col span={24}>
                <h4>microondas</h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={plancha}
                  style={{
                    width: '50%'
                  }}
                  alt='plancha'
                />
              </Col>
              <Col span={24}>
                <h4>plancha</h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={24}>
                <img
                  src={sandwichera}
                  style={{
                    width: '50%'
                  }}
                  alt='sandwichera'
                />
              </Col>
              <Col span={24}>
                <h4>sandwichera</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Shop;
