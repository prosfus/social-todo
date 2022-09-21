
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './app/store';
import MyPage from './pages/MyPage';
import Social from './pages/Social';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <MyPage /> },
    { path: "/social", element: <Social /> },
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
