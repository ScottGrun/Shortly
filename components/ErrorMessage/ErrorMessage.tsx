import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
	error: string | string[] | undefined;
}

// Thanks to https://simplernerd.com/next-auth-custom-error-page/
// For the below error messages for next-auth I have modified the OAuthAccountNotLinked message
type ErrorTypes = {
	[key: string]: string;
};

const possibleErrors: ErrorTypes = {
	Signin: 'Try signing with a different account.',
	OAuthSignin: 'Try signing with a different account.',
	OAuthCallback: 'Try signing with a different account.',
	OAuthCreateAccount: 'Try signing with a different account.',
	EmailCreateAccount: 'Try signing with a different account.',
	Callback: 'Try signing with a different account.',
	OAuthAccountNotLinked:
		'Looks like we have seen you before! Sign in using the same method you used this email to sign in with before. You are likely trying to sign using a email that already has a magic link sent to it :)',
	EmailSignin: 'Check your email address.',
	CredentialsSignin:
		'Sign in failed. Check the details you provided are correct.',
	default: 'Unable to sign in.',
};

export const ErrorMessage: React.FC<Props> = ({ error }) => {
	const router = useRouter();

	useEffect(() => {
		return () => {
			router.push(
				{
					pathname: '/',
					query: null,
				},
				undefined,
				{ shallow: true }
			);
		};
	}, [router]);

	const errorMessage =
		error && (possibleErrors[error as string] ?? possibleErrors.default);

	return <Wrapper>{errorMessage}</Wrapper>;
};

const Wrapper = styled.div`
	width: 100%;
	padding: 6px;
	color: ${(p) => p.theme.COLORS.white};
	background-color: ${(p) => p.theme.COLORS.warning};
	border-radius: 3px;
	margin: 16px 0px;
	font-size: ${14 / 16}rem;
`;
