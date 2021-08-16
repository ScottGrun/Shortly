import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import blobSrcDesktop from '../../public/assets/bg-boost-desktop.svg';
import blobSrc from '../../public/assets/bg-boost-mobile.svg';
import { h2Styles } from '../../styles/typography';
import { Button } from '../Button/Button';

type CTABannerProps = {
	className?: string;
	title: string;
	buttonText: string;
};

export const CallToActionBanner: React.FC<CTABannerProps> = ({
	title,
	buttonText,
	className,
}) => {
	return (
		<Wrapper className={className}>
			<Background>
				<Image
					src={blobSrc}
					layout="fill"
					objectFit="cover"
					alt="Background blob pattern"
				/>
			</Background>
			<BackgroundDesktop>
				<Image
					src={blobSrcDesktop}
					layout="fill"
					objectFit="cover"
					alt="Background blob pattern"
				/>
			</BackgroundDesktop>
			<Title>{title}</Title>
			<StyledButton variant="primary">{buttonText}</StyledButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 300px;

	background-color: ${(p) => p.theme.COLORS.secondary[900]};
`;

const Title = styled.h2`
	z-index: 1;
	${h2Styles};
	color: ${(p) => p.theme.COLORS.white};
`;

const StyledButton = styled(Button)`
	z-index: 1;

	height: 56px;
	width: 197px;
	margin-top: 16px;
`;

const Background = styled.div`
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;

	height: 100%;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;

const BackgroundDesktop = styled.div`
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	height: 100%;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: revert;
	}
`;
