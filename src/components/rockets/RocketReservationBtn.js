import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rocketsSlice';

const RocketReservationBtn = ({ rocketId }) => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => {
    const rocket = state.rockets.rockets.find((rocket) => rocket.id === rocketId);
    return rocket.reserved;
  });

  const reserveRocketAction = () => {
    dispatch(reserveRocket(rocketId));
  };
  const cancelReservationAction = () => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <Button
      type="button"
      onClick={reserved ? cancelReservationAction : reserveRocketAction}
      variant={reserved ? 'outline-secondary' : 'primary'}
      size="lg"
      className="mt-3"
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </Button>
  );
};

RocketReservationBtn.propTypes = {
  rocketId: PropTypes.number.isRequired,
};

export default RocketReservationBtn;
