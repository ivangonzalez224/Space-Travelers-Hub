import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import Missions from '../components/pages/Missions';

test('Missions component renders correctly the mission name', async() => {
   render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });
});

test('Missions component renders correctly the mission description', async() => {
  render(
   <Provider store={store}>
     <Missions />
   </Provider>,
 );

 await waitFor(() => {
   expect(screen.getByText('Commercial Resupply Services')).toBeInTheDocument();
 });
});

test('change join status', async () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  await waitFor(() => {
    const joinButtons = screen.getAllByText('Join Mission');

    fireEvent.click(joinButtons[0]);
  });

  expect(screen.getByText('Active Member')).toBeInTheDocument();
});

test('Missions component renders correctly the number of join mission buttons', async () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  await waitFor(() => {
    const rockets = screen.getAllByText('Join Mission');
    expect(rockets.length).toBe(9);
  });
});
