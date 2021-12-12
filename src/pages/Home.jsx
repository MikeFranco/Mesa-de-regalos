import { Row, Col } from 'antd';
import '../index.css';
import principal from '../assets/img/principal.jpg';

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
            <h2 className='text-white'>Nuestra Boda</h2>
            <h2 className='text-importante'>Diana &amp; Steve</h2>
          </Col>
        </Row>
      </div>
      <section class='acerca-novia' id='acercaDe'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-12 col-md-6 d-md-flex bg-light py-4 edit-novia'>
              <div class='info-novia align-self-center'>
                <h2>Acerca de la novia</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio commodi deserunt sunt dolores ea? Dolore, quia eos? Ut
                  facere, iusto quia vitae possimus eaque fugit veniam tenetur
                  amet sit quod.
                </p>
                <p>Padres de la novia: Antonio Rodriguez y Berenice Espinoza</p>
              </div>
            </div>
            <img
              src='assets/img/novia.jpg'
              alt='imagen de la novia'
              class='img-fluid col-12 col-md-6 p-0'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
