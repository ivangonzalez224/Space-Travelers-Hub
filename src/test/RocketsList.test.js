import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/pages/Rockets';

test('Rockets component renders correctly', async () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
  });
});

test('Rockets component renders correctly', async () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
  });
});

test('Rockets component displays correct number of rockets', async () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  await waitFor(() => {
    const rockets = screen.getAllByText(/Falcon [1-9]/);
    expect(rockets.length).toBe(5);
  });
});

test('Rockets component displays correct number of Reserve Rocket buttons', async () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  await waitFor(() => {
    const rockets = screen.getAllByText('Reserve Rocket');
    expect(rockets.length).toBe(4);
  });
});
