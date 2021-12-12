import { Row, Col } from 'antd';
import '../index.css';
import principal from '../assets/img/principal.jpg';
import novia from '../assets/img/novia.jpg';
import novio from '../assets/img/novio.jpg';

const Home = () => {
  return (
    <>
      <div
        clasName='nuestra-boda'
        style={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${principal})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}>
        <Row
          justify='center'
          align='bottom'
          style={{
            height: '100vh',
            width: '100vw'
          }}>
          <Col span={12}>
            {' '}
            <h2 style={{ textAlign: 'center' }} className='text-white'>
              Nuestra Boda
            </h2>
            <h2
              style={{ textAlign: 'center' }}
              className='text-white text-importante'>
              Diana &amp; Rodrigo
            </h2>
          </Col>
        </Row>
      </div>
      <section className='acerca-novia' id='acercaDe'>
        <Row>
          <Col span={16} className='edit-novia'>
            <div className='info-novia'>
              <h2>Acerca de la novia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                commodi deserunt sunt dolores ea? Dolore, quia eos? Ut facere,
                iusto quia vitae possimus eaque fugit veniam tenetur amet sit
                quod.
              </p>
              <p>Padres de la novia: Antonio Rodriguez y Berenice Espinoza</p>
            </div>
          </Col>
          <Col span={8}>
            <img
              src={novia}
              alt='imagen de la novia'
              style={{
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }}
            />
          </Col>
        </Row>
      </section>
      <section className='acerca-novio' id='acercaDe'>
        <Row>
          <Col span={8}>
            <img
              src={novio}
              alt='imagen del novio'
              style={{
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }}
            />
          </Col>
          <Col span={16} className='edit-novia'>
            <div className='info-novia'>
              <h2>Acerca del novio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                commodi deserunt sunt dolores ea? Dolore, quia eos? Ut facere,
                iusto quia vitae possimus eaque fugit veniam tenetur amet sit
                quod.
              </p>
              <p>Padres de la novia: Ricardo González y Claudia Mendoza</p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
