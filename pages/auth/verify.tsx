import React, { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import animatedInboxSrc from '../../public/assets/animated-inbox.svg';
import { bodyTextStyles, h1Styles } from '../../styles/typography';

export default function Verify(): ReactElement {
	return (
		<Wrapper>
			<Image
				src={animatedInboxSrc}
				layout="fixed"
				width="200"
				height="230"
				alt="A mailbox with it's mail flag flipped up"
			/>
			<Heading>Check your email</Heading>
			<Body>
				A sign in link has been sent to your email address. You may also need to
				<b> check your spam folder</b>
			</Body>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	height: 100vh;
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;

const Heading = styled.h1`
	${h1Styles};
	margin-top: 24px;
`;

const Body = styled.p`
	${bodyTextStyles}
	margin-top: 36px;
	color: ${(p) => p.theme.COLORS.dark[700]};

	b {
		color: ${(p) => p.theme.COLORS.dark[900]};
	}
`;
