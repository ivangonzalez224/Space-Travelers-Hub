import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import Missions from '../components/pages/Missions';

test('Missions component renders correctly', async() => {
   render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });
});
