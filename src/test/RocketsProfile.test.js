import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketsProfile from '../components/rockets/RocketsProfile';

const mockStore = configureMockStore();

describe('RocketsProfile component', () => {
  test('displays reserved rockets', () => {
    const rockets = [
      { rocket_id: 'falcon1', rocket_name: 'Falcon 1', reserved: true },
      { rocket_id: 'falcon9', rocket_name: 'Falcon 9', reserved: false },
      { rocket_id: 'falconheavy', rocket_name: 'Falcon Heavy', reserved: true },
    ];
    const store = mockStore({
      rockets: {
        rockets,
      },
    });

    render(
      <Provider store={store}>
        <RocketsProfile />
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('Falcon Heavy')).toBeInTheDocument();
    expect(screen.queryByText('Falcon 9')).not.toBeInTheDocument();
  });

  test('displays no rockets message', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
      },
    });

    render(
      <Provider store={store}>
        <RocketsProfile />
      </Provider>,
    );

    expect(screen.getByText('No Rockets reserved yet')).toBeInTheDocument();
  });
});
