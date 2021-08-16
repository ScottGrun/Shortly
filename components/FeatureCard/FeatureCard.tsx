import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { h3Styles } from '../../styles/typography';

interface FeatureCardProps {
	title: string;
	description: string;
	iconSrc: string;
	altText: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	description,
	iconSrc,
	altText,
}) => {
	return (
		<Wrapper>
			<IconBall>
				<Image
					src={iconSrc}
					layout="fixed"
					height="40"
					width="40"
					alt={altText}
				/>
			</IconBall>
			<CardBody>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</CardBody>
		</Wrapper>
	);
};

const Wrapper = styled.li`
	display: flex;
	flex-flow: column;
	align-items: center;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 300px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		align-items: flex-start;
		max-width: 370px;
	}
`;

const IconBall = styled.div`
	position: relative;
	display: grid;
	place-items: center;

	width: 88px;
	height: 88px;

	border-radius: 50%;
	background-color: ${(p) => p.theme.COLORS.secondary[900]};

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-left: 32px;
	}
`;

const CardBody = styled.div`
	width: 100%;
	min-height: 267px;

	margin-top: -40px;
	padding: 0 32px;

	padding-top: 0;

	background-color: ${(p) => p.theme.COLORS.white};
	border-radius: 5px;

	text-align: center;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		text-align: start;
	}
`;

const Title = styled.h3`
	${h3Styles};
	margin-top: 70px;
	color: ${(p) => p.theme.COLORS.secondary[900]};
`;

const Description = styled.p`
	margin-top: 12px;
	color: ${(p) => p.theme.COLORS.dark[700]};
`;
