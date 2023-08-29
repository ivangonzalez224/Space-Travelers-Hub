import PropTypes from 'prop-types';
import RocketReservationBtn from './RocketReservationBtn';

const RocketsItem = ({
  id, rocketName, description, flickrImages,
}) => (
  <li>
    <div className="rocketImage">
      <img src={flickrImages[0]} alt="rocket" />
    </div>
    <div className="description-container">
      <div className="rocketInfo">
        <h2 className="rocketName">{rocketName}</h2>
        <p className="rocketDescrip">{description}</p>
      </div>
      <div className="rocketbuttons">
        <RocketReservationBtn rocketId={id} />
      </div>
    </div>
  </li>
);

RocketsItem.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketsItem;
