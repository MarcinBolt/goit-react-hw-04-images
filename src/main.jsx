import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ImageGalleryProvider } from './components/ImageGalleryContext/ImageGalleryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageGalleryProvider>
      <App />
    </ImageGalleryProvider>
  </React.StrictMode>
);
