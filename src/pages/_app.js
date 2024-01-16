import React from 'react';
import { WishlistProvider } from '../components/WishlistContext'
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}

export default App;



