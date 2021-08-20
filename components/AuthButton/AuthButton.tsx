import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { btnTextStyles } from '../../styles/typography';
interface AuthButtonProps {
	children?: React.ReactNode | string;
	imgSrc?: string;
	altText?: string;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
}

export const AuthButton: React.FC<AuthButtonProps> = ({
	children,
	imgSrc,
	altText,
	onClick,
	type,
}) => {
	return (
		<Wrapper type={type} onClick={onClick}>
			{imgSrc && (
				<Image
					src={imgSrc}
					layout="fixed"
					height="28"
					width="28"
					alt={altText}
				/>
			)}
			<span>{children}</span>
		</Wrapper>
	);
};

const Wrapper = styled.button`
	${btnTextStyles};
	display: flex;
	align-items: center;
	justify-content: center;

	width: 300px;
	height: 45px;
	border: solid 1px ${(p) => p.theme.COLORS.dark[500]};
	border-radius: 5px;

	font-weight: ${(p) => p.theme.WEIGHTS.medium};

	span {
		margin-left: 10px;
	}

	&:hover {
		background-color: ${(p) => p.theme.COLORS.dark[200]};
	}
`;
