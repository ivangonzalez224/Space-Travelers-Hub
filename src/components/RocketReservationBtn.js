import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

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
    <button
      type="button"
      onClick={reserved ? cancelReservationAction : reserveRocketAction}
      className={reserved ? 'btn-res btn-danger' : 'btn-res btn-success'}
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  );
};

RocketReservationBtn.propTypes = {
  rocketId: PropTypes.number.isRequired,
};

export default RocketReservationBtn;
