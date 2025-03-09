import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routers/Router.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
      <AuthProvider>
      <Provider store={store}>  
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer></ToastContainer>
        </Provider>,
      </AuthProvider>  
)
