import { css } from "styled-components";

export const baseHeaderStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
`;

export const bodyTextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${18 / 16}rem;
	line-height: 30px;
	letter-spacing: 0.122727px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		font-size: ${22 / 16}rem;
		line-height: 36px;
		letter-spacing: 0.15px;
	}
`;

export const body2TextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${16 / 16}rem;
	line-height: 28px;
	letter-spacing: 0.109091px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		font-size: ${18 / 16}rem;
		line-height: 32px;
		letter-spacing: 0.122727px;
	}
`;

export const body3TextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${15 / 16}rem;
	line-height: 26px;
`;

// Headers
export const h1Styles = css`
	${baseHeaderStyles}
	font-size: ${42 / 16}rem;
	line-height: 48px;
	letter-spacing: -1.05px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		font-size: ${80 / 16}rem;
		line-height: 90px;
		letter-spacing: -2px;
	}
`;

export const h2Styles = css`
	${baseHeaderStyles}
	font-size: ${28 / 16}rem;
	line-height: 48px;
	letter-spacing: -0.7px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		font-size: ${40 / 16}rem;
		letter-spacing: -1px;
	}
`;

export const h3Styles = css`
	${baseHeaderStyles}
	font-size: ${22 / 16}rem;
	line-height: 33px;
`;

// Input
export const inputTextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
	font-size: ${16 / 16}rem;
	line-height: 36px;
	letter-spacing: 0.12px;

	::placeholder,
	::-webkit-input-placeholder {
		opacity: 0.5;
		color: ${(p) => p.theme.COLORS.dark[900]};
	}
	:-ms-input-placeholder {
		opacity: 0.5;
		color: ${(p) => p.theme.COLORS.dark[900]};
	}
`;

// Error Messages
export const errorMsgTextStyles = css`
	font-style: italic;
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${12 / 16}rem;
	line-height: 18px;
	letter-spacing: 0.0818182px;
`;

// Buttons
export const btnTextStyles = css`
	font-family: "Poppins", sans-serif;
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
	font-size: ${15 / 16}rem;
	line-height: 22px;
`;

// Nav
export const navLinkTextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
	font-size: ${15 / 16}rem;
	line-height: 22px;
`;

// Links
export const linkTextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${16 / 16}rem;
	line-height: 36px;
	letter-spacing: 0.12px;
`;

// Footer

export const footerLinkTitleStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
	font-size: ${16 / 16}rem;
	line-height: 24px;
	letter-spacing: -0.25px;
`;

export const footerLinkTextStyles = css`
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${15 / 16}rem;
	line-height: 22px;
	letter-spacing: -0.234375px;
`;
