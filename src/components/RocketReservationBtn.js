import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

const RocketReservationBtn = ({ rocketId }) => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => {
    console.log('rokets:' + state.rockets.rockets);
    console.log(state.rockets);
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
      className={reserved ? 'btn btn-danger' : 'btn btn-success'}
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  );
};

RocketReservationBtn.propTypes = {
  rocketId: PropTypes.number.isRequired,
};

export default RocketReservationBtn;
