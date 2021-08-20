import { ReactElement } from 'react';

import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	const router = useRouter();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider session={pageProps.session}>
					<Component {...pageProps} key={router.query.name} />
				</Provider>
			</ThemeProvider>
		</>
	);
}
export default MyApp;
