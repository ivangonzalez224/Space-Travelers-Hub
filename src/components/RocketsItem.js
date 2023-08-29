import PropTypes from 'prop-types';
import RocketReservationBtn from './RocketReservationBtn';

const RocketsItem = ({
  id, rocketName, description, flickrImages, reserved,
}) => (
  <li className="rockets-listItems">
    <div className="rocketImage">
      <img src={flickrImages[0]} alt="rocket" />
    </div>
    <div className="description-container">
      <div className="rocketInfo">
        <h2 className="rocketName">{rocketName}</h2>
        <div className="rocketDescription-container">
          {reserved && <span className="reserved">Reserved </span>}
          <span className="rocketDescrip">{description}</span>
        </div>
      </div>
      <div className="rocketbuttons">
        <RocketReservationBtn rocketId={id} />
      </div>
    </div>
  </li>
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
