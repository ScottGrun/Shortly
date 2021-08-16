import React from 'react';

import styled from 'styled-components';

import { btnTextStyles } from '../../styles/typography';

export interface ButtonProps {
	children: React.ReactNode;
	variant: 'primary' | 'secondary';
	className?: string;
	onClick?: () => any;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant,
	onClick,
	type,
}) => {
	return variant === 'primary' ? (
		<PrimaryButton className={className} onClick={onClick}>
			{children}
		</PrimaryButton>
	) : (
		<SecondaryButton className={className} onClick={onClick} type={type}>
			{children}
		</SecondaryButton>
	);
};

const BaseStyles = styled.button`
	${btnTextStyles}
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0 24px;
	height: 40px;

	border-radius: 28px;
	transition: background-color 200ms ease;
`;

const PrimaryButton = styled(BaseStyles)`
	background-color: ${(p) => p.theme.COLORS.primary[900]};
	color: ${(p) => p.theme.COLORS.white};

	&:hover {
		background-color: ${(p) => p.theme.COLORS.primary[700]};
	}
`;

const SecondaryButton = styled(BaseStyles)`
	background-color: ${(p) => p.theme.COLORS.white};
	color: ${(p) => p.theme.COLORS.dark[700]};

	&:hover {
		background-color: ${(p) => p.theme.COLORS.dark[200]};
	}
`;
