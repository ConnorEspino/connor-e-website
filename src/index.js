import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './Testing/reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const App = React.lazy(() => import('./App'));
const EDP = React.lazy(() => import('./Pages/EDP'));
const WYHAM = React.lazy(() => import('./Pages/WYHAM'));
const OSED = React.lazy(() => import('./Pages/OSED'));

const router = createBrowserRouter([
    {
      
      path: "/",
      element: <App/>,
     
    },
    {
       path: "/EDP",
      element: <EDP/>,
    },
    {
       path: "/WYHAM",
      element: <WYHAM/>,
    },
    {
       path: "/OSED",
      element: <OSED/>,
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
