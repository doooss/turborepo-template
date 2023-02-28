import 'style-sheets/global.css';

import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { theme } from 'style-sheets';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
