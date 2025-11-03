import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App.jsx'
import reducer from './reducers'
import { getAllProducts } from './actions'
import './index.css'

// Khởi tạo store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra serialize nếu bạn có dữ liệu không tuần tự
    }),
})

// Gọi action lấy danh sách sản phẩm khi khởi chạy app
store.dispatch(getAllProducts())

// Render ứng dụng
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
