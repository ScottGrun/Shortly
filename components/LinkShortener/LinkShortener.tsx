import React, { useState, forwardRef } from 'react';

import { Session } from 'next-auth';
import Image from 'next/image';
import styled from 'styled-components';

import blobFullSrc from '../../public/assets/bg-shorten-desktop.svg';
import blobRightSrc from '../../public/assets/bg-shorten-mobile.svg';
import { errorMsgTextStyles, inputTextStyles } from '../../styles/typography';
import { shortenUrl } from '../../utils/shortenUrl';
import { validateUrl } from '../../utils/validateUrl';
import { Button, ButtonProps } from '../Button/Button';
import { Link } from '.prisma/client';

type InputProps = {
	setUserLinks: React.Dispatch<React.SetStateAction<Link[]>>;
	session: Session;
};

const LinkShortener: React.ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = ({ setUserLinks, session }, ref) => {
	const [sourceLink, setSourceLink] = useState('');
	const [error, setError] = useState<string | null>(null);

	const handleInputChange = (url: string) => {
		setSourceLink(url);

		if (error) {
			validateUrl(url).valid ? setError(null) : null;
		}
	};

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & { longUrl: { value: string } };
		const submittedUrl = target.longUrl.value;
		const { valid, error } = validateUrl(submittedUrl);

		if (valid) {
			const { shortLink } = await shortenUrl(submittedUrl);

			if (!session) {
				const localLinks = localStorage.getItem('localLinks');
				if (localLinks) {
					const linksToSave = [...JSON.parse(localLinks), shortLink];
					localStorage.setItem('localLinks', JSON.stringify(linksToSave));
				} else {
					localStorage.setItem('localLinks', JSON.stringify([shortLink]));
				}
			}

			// Update UI with new shortened Link
			if (shortLink) {
				setUserLinks((prev) => [...prev, shortLink]);
			}
		} else {
			setError(error);
		}
	};

	return (
		<Wrapper>
			<Background>
				<Image src={blobRightSrc} alt="Background pattern" />
			</Background>
			<BackgroundDesktop>
				<Image
					src={blobFullSrc}
					layout="fill"
					objectFit="cover"
					alt="Background pattern"
				/>
			</BackgroundDesktop>
			<Form onSubmit={handleSubmit}>
				<Input
					type="url"
					placeholder="Shorten a link here..."
					error={error}
					id="longUrl"
					name="longUrl"
					value={sourceLink}
					ref={ref}
					onChange={(e) => {
						handleInputChange(e.target.value);
					}}
				/>

				<ErrorMessage error={error}>{error}</ErrorMessage>
				<SubmitButton variant="primary" type="submit">
					Shorten Link
				</SubmitButton>
			</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;

	width: 100%;
	padding: 24px;

	border-radius: 10px;
	background-color: ${(p) => p.theme.COLORS.secondary[900]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		padding: 52px 64px;
	}
`;

const Form = styled.form`
	position: relative;

	display: flex;
	flex-flow: column;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: row;
		align-items: center;
		flex-wrap: wrap;
	}
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 0;

	img {
		border-radius: 10px;
	}

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

	img {
		border-radius: 10px;
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: revert;
	}
`;

const Input = styled.input<{ error: string | null }>`
	${inputTextStyles};
	padding: 6px 16px;
	width: 100%;
	height: 48px;
	flex: 1;
	border: solid 3px ${(p) => (p.error ? p.theme.COLORS.warning : 'transparent')};

	border-radius: 5px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-right: 24px;
	}
`;

const SubmitButton = styled(Button)<ButtonProps>`
	z-index: 1;
	height: 48px;
	margin-top: 16px;
	border-radius: 5px;

	width: 100%;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 188px;
		margin-top: 0;
	}
`;

const ErrorMessage = styled.p<{ error: string | null }>`
	${errorMsgTextStyles};
	z-index: 1;
	display: ${(p) => (p.error ? 'block' : 'none')};
	margin-top: 4px;
	color: ${(p) => p.theme.COLORS.warning};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		order: 3;
		width: 100%;
	}
`;

export default forwardRef(LinkShortener);
