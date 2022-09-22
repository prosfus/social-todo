
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './app/store';
import MyPage from './pages/MyPage';
import Social from './pages/Social';
import Landing from './pages/Landing';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOMServer from 'react-dom/server';

const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/mypage", element: <MyPage /> },
    { path: "/social", element: <Social /> },
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
