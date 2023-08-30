import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import RocketReservationBtn from './RocketReservationBtn';

const RocketsItem = ({
  id, rocketName, description, flickrImages, reserved,
}) => (
  <Row className="my-4">
    <Col sm={4}>
      <div className="rocketImage">
        <Image src={flickrImages[0]} alt="rocket" fluid />
      </div>
    </Col>
    <Col>
      <div className="description-container">
        <div className="rocketInfo mb-3">
          <h2 className="rocketName">{rocketName}</h2>
          <div className="rocketDescription-container">
            {reserved && (
            <Badge bg="info" className="ml-3 mr-4" style={{ fontSize: '14px' }}>
              Reserved
            </Badge>
            )}
            <span className="ml-3" style={{ fontSize: '18px' }}>{description}</span>
          </div>
        </div>
        <RocketReservationBtn rocketId={id} />
      </div>
    </Col>
  </Row>
);

RocketsItem.defaultProps = {
  reserved: false,
};

RocketsItem.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool,
};

export default RocketsItem;
