import { ReactElement } from 'react';

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
				<Component {...pageProps} key={router.query.name} />
			</ThemeProvider>
		</>
	);
}
export default MyApp;
