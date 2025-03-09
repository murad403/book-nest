import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routers/Router.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={Router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </Provider>,
)
