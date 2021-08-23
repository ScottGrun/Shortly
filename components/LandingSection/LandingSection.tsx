import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import landingImgSrc from '../../public/assets/illustration-working.svg';
import { bodyTextStyles, h1Styles } from '../../styles/typography';
import { Button, ButtonProps } from '../Button/Button';

type Props = {
	className?: string;
	handleFocus: any;
};

export const LandingSection: React.FC<Props> = ({
	className,
	handleFocus,
}: Props) => {
	return (
		<Wrapper className={className}>
			<InnerLandingWrapper>
				<LandingImgWrapper>
					<Image
						src={landingImgSrc}
						alt="A person working at a desk"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</LandingImgWrapper>

				<LandingTextWrapper>
					<LandingCTA>More than just shorter links</LandingCTA>
					<LandingBody>
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</LandingBody>
					<LandingButton variant="primary" onClick={handleFocus}>
						Get Started
					</LandingButton>
				</LandingTextWrapper>
			</InnerLandingWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	width: 100%;
	padding: 0 16px;
	padding-bottom: 152px;
	background-color: white;
`;

const InnerLandingWrapper = styled.div`
	display: flex;
	flex-flow: column;

	max-width: 1440px;
	margin: 0 auto;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		align-items: center;
		max-width: 1300px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-flow: row;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: center;
	}

	@media ${(p) => p.theme.QUERIES.xlLaptopAndUp} {
		max-width: 1440px;
	}
`;

const LandingImgWrapper = styled.div`
	position: relative;
	width: 511px;
	height: 337px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		width: 733px;
		height: 482px;
	}
`;

const LandingCTA = styled.h1`
	${h1Styles};
	color: ${(p) => p.theme.COLORS.dark[900]};
`;

const LandingBody = styled.p`
	${bodyTextStyles};

	margin-top: 15px;
	color: ${(p) => p.theme.COLORS.dark[700]};

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		max-width: 540px;
	}
`;

const LandingButton = styled(Button)<ButtonProps>`
	margin: 0 auto;
	margin-top: 32px;
	height: 56px;
	width: 197px;
	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin: 0 0;
		margin-top: 38px;
	}
`;

const LandingTextWrapper = styled.div`
	margin-top: 37px;
	text-align: center;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		max-width: 600px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		width: 570px;
		text-align: revert;
	}

	@media ${(p) => p.theme.QUERIES.xlLaptopAndUp} {
		margin-right: 100px;
	}
`;
