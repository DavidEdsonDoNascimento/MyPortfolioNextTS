import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../theme';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../../next-seo-config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO}/>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
