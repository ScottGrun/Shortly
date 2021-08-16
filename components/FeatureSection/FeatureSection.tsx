import React from 'react';

import styled from 'styled-components';

import brandIconSrc from '../../public/assets/icons/icon-brand-recognition.svg';
import recordsIconSrc from '../../public/assets/icons/icon-detailed-records.svg';
import customizeIconSrc from '../../public/assets/icons/icon-fully-customizable.svg';
import { body2TextStyles, h2Styles } from '../../styles/typography';
import { FeatureCard } from '../FeatureCard/FeatureCard';

interface FeatureSectionProps {
	className?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
	className,
}) => {
	return (
		<Wrapper className={className}>
			<TextWrapper>
				<Heading>Advanced Statistics</Heading>
				<Description>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</Description>
			</TextWrapper>

			<FeaturesWrapper>
				<FeatureCard
					title="Brand Recognition"
					description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
					iconSrc={brandIconSrc}
					altText="Graph that is trending upwards"
				/>
				<FeatureCard
					title="Detailed Records"
					description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
					iconSrc={recordsIconSrc}
					altText="Speedometer with its needle pointing upwards"
				/>
				<FeatureCard
					title="Fully Customizable"
					description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
					iconSrc={customizeIconSrc}
					altText="A marker, pen, and paintbrush fanned outwards"
				/>
				<ColorBar />
			</FeaturesWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 100%;
`;

const TextWrapper = styled.div`
	text-align: center;
	margin-bottom: 48px;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		max-width: 540px;
		margin: 0 auto;
	}
`;

const Heading = styled.h2`
	${h2Styles};
	color: ${(p) => p.theme.COLORS.dark[900]};
`;

const Description = styled.p`
	${body2TextStyles};
	color: ${(p) => p.theme.COLORS.dark[700]};
`;

const FeaturesWrapper = styled.ul`
	z-index: 5;
	position: relative;
	display: flex;
	flex-flow: column;
	gap: 64px;
	width: fit-content;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-flow: row;
		margin-top: 56px;

		li:nth-child(2) {
			margin-top: 44px;
		}

		li:nth-child(3) {
			margin-top: 88px;
		}
	}
`;

const ColorBar = styled.div`
	z-index: -1;
	position: absolute;
	top: 0;
	right: calc(50% - 4px);
	display: block;
	width: 8px;
	height: 100%;
	background-color: ${(p) => p.theme.COLORS.primary[900]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: block;
		width: 100%;
		height: 8px;
		top: 196px;
		right: 0;
	}
`;
