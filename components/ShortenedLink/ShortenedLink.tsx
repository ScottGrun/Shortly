import React, { useState } from 'react';

import styled from 'styled-components';

import { linkTextStyles } from '../../styles/typography';
import { Button } from '../Button/Button';

type LinkProps = {
	sourceLink: string;
	shortLink: string;
};

type ButtonProps = {
	clicked: boolean;
};

export const ShortenedLink: React.FC<LinkProps> = ({
	sourceLink,
	shortLink,
}) => {
	const [clicked, setClicked] = useState(false);

	const handleCopy = () => {
		setClicked(true);

		navigator.clipboard.writeText(shortLink);

		const timer = setTimeout(() => {
			setClicked(false);
			clearTimeout(timer);
		}, 2000);
	};

	return (
		<Wrapper>
			<InnerWrapper>
				<LinkToShorten href={sourceLink}>{sourceLink}</LinkToShorten>
				<Divider />
				<ShortLink href={shortLink}>{shortLink} </ShortLink>
				<CopyLinkButton
					variant="primary"
					clicked={clicked}
					onClick={() => handleCopy()}>
					{clicked ? 'Copied!' : 'Copy'}
				</CopyLinkButton>
			</InnerWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.li`
	overflow: hidden;

	width: 100%;
	padding: 6px 16px 16px 16px;

	background-color: ${(p) => p.theme.COLORS.white};
	border-radius: 5px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: row;
		align-items: center;
		/* padding-left: 32px;
		padding-right: 24px; */
		padding: 0;
	}
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-flow: column;
	flex-wrap: wrap;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: row;
		align-items: center;
		padding: 16px;
	}
`;

const LinkToShorten = styled.a`
	${linkTextStyles};
	color: ${(p) => p.theme.COLORS.dark[900]};
	width: fit-content;
	word-wrap: break-word;
`;

const ShortLink = styled.a`
	${linkTextStyles};
	color: ${(p) => p.theme.COLORS.primary[900]};
	word-wrap: break-word;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-left: auto;
		margin-right: 24px;
		word-wrap: break-word;
		width: fit-content;
	}
`;

const Divider = styled.hr`
	height: 1px;
	width: 100%;
	margin: 6px 0px;

	background-color: ${(p) => p.theme.COLORS.dark[700]};
	opacity: 0.25;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;

const CopyLinkButton = styled(Button)<ButtonProps>`
	margin-top: 8px;
	border-radius: 5px;

	background-color: ${(p) =>
		p.clicked
			? `${p.theme.COLORS.secondary[900]} !important`
			: p.theme.COLORS.primary[900]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		min-width: 109px;
		margin: 0;
	}
`;
