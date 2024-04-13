import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { RouterProvider } from "react-router-dom";
import router from './features/index.jsx'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ConfigProvider>
        <RouterProvider router={router} />
    </ConfigProvider>
)
