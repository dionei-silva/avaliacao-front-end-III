import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './Routers/AppRoutes';
import { DefaultLayout } from './config/layout/DefaultLayout';
import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />
          <DefaultLayout>
            <AppRoutes />
          </DefaultLayout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
