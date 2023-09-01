import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketReservationBtn from '../components/rockets/RocketReservationBtn';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

const mockStore = configureMockStore();

describe('RocketReservationBtn component', () => {
  test('displays reserve button when rocket is not reserved', () => {
    const store = mockStore({
      rockets: {
        rockets: [
          { id: 1, name: 'Falcon 1', reserved: false },
          { id: 2, name: 'Falcon 9', reserved: false },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <RocketReservationBtn rocketId={1} />
      </Provider>,
    );

    const reserveButton = getByText('Reserve Rocket');
    expect(reserveButton).toBeInTheDocument();

    fireEvent.click(reserveButton);
    expect(store.getActions()).toContainEqual(reserveRocket(1));
  });

  test('displays cancel reservation button when rocket is reserved', () => {
    const store = mockStore({
      rockets: {
        rockets: [
          { id: 1, name: 'Falcon 1', reserved: true },
          { id: 2, name: 'Falcon 9', reserved: false },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <RocketReservationBtn rocketId={1} />
      </Provider>,
    );

    const cancelButton = getByText('Cancel Reservation');
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(cancelButton);
    expect(store.getActions()).toContainEqual(cancelReservation(1));
  });
});
