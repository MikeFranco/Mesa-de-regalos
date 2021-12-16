import { Row, Col } from 'antd';
/* import novia from '../assets/img/novia.jpg';
import novio from '../assets/img/novio.jpg'; */
import '../index.css';
export const AboutSections = ({
  firstSection,
  secondSection
}) => {
  return (
    <>
      <section className='acerca-novia' id='acercaDe'>
        <Row>
          <Col span={16} className='edit-novia'>
            <div className='info-novia'>
              <h2>{firstSection.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                commodi deserunt sunt dolores ea? Dolore, quia eos? Ut facere,
                iusto quia vitae possimus eaque fugit veniam tenetur amet sit
                quod.
              </p>
              <p>{firstSection.bottomP}</p>
            </div>
          </Col>
          <Col span={8}>
            <img
              src={firstSection.img}
              alt={firstSection.title}
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
      {secondSection && (
      <section className='acerca-novio' id='acercaDe'>
        <Row>
          <Col span={8}>
            <img
              src={secondSection.img}
              alt={secondSection.title}
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
              <h2>{secondSection.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                commodi deserunt sunt dolores ea? Dolore, quia eos? Ut facere,
                iusto quia vitae possimus eaque fugit veniam tenetur amet sit
                quod.
              </p>
              <p>{secondSection.bottomP}</p>
            </div>
          </Col>
        </Row>
      </section>
      )}
    </>
  );
};
