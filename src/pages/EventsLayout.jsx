import { Row, Col, Carousel } from 'antd';
import '../index.css';
import sears from '../assets/img/sears.jpg';
import amazon from '../assets/img/amazon.jpg';
import liverpool from '../assets/img/liverpool.jpg';
import xv from '../assets/img/xv.jpg';
import boda from '../assets/img/principal.jpg';
import bautizo from '../assets/img/bautizo.jpg';
import fiestanino from '../assets/img/fiestanino.jpg';
import graduacion from '../assets/img/graduacion.jpg';
import fiestamujer from '../assets/img/fiestamujer.jpg';

const EventsLayout = ({ mainTitle, subTitle, headerImg, aboutSection }) => {
  const getImage = imageName =>
    imageName === 'boda'
      ? boda
      : imageName === 'xv'
      ? xv
      : imageName === 'bautizo'
      ? bautizo
      : imageName === 'fiesta'
      ? fiestanino
      : imageName === 'graduacion'
      ? graduacion
      : imageName === 'cumple'
      ? fiestamujer
      : bautizo;

  return (
    <>
      <div
        className='nuestra-boda'
        style={{
          backgroundImage: `url(${getImage(headerImg)})`
        }}>
        <Row
          justify='center'
          align='bottom'
          style={{
            height: '100vh',
            width: '100%'
          }}>
          <Col span={12}>
            {' '}
            <h2 style={{ textAlign: 'center' }} className='text-white'>
              {mainTitle}
            </h2>
            <h2
              style={{ textAlign: 'center' }}
              className='text-white text-importante'>
              {subTitle}
            </h2>
          </Col>
        </Row>
      </div>

      {aboutSection}

      <Row justify='center' style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <h4
                className='carouselImage'
                style={{ backgroundImage: `url(${amazon})` }}>
                Mesa de regalos: SC7388DVJD
              </h4>
            </div>
            <div>
              <h4
                className='carouselImage'
                style={{ backgroundImage: `url(${liverpool})` }}>
                Mesa de regalos: SC7388DVJD
              </h4>
            </div>
            <div>
              <h4
                className='carouselImage'
                style={{ backgroundImage: `url(${sears})` }}>
                Mesa de regalos: SC7388DVJD
              </h4>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default EventsLayout;
