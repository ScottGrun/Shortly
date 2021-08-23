import React, { Dispatch, SetStateAction } from 'react';

import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/dialog/styles.css';
import { signIn } from 'next-auth/client';
import Image from 'next/image';
import styled from 'styled-components';

import gitHubIconSrc from '../../public/assets/icons/icon-github.svg';
import googleIconSrc from '../../public/assets/icons/icon-google.svg';
import { inputTextStyles } from '../../styles/typography';
import { AuthButton } from '../AuthButton/AuthButton';

interface ModalProps {
	showDialog: boolean;
	setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: React.FC<ModalProps> = ({
	showDialog,
	setShowDialog,
}) => {
	const close = () => setShowDialog(false);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & { email: { value: string } };

		signIn('email', {
			email: target.email.value,
		});
	};

	return (
		<Wrapper isOpen={showDialog} onDismiss={close}>
			<StyledDialog aria-label="Login modal">
				<CloseButton onClick={close}>
					<VisuallyHidden>Close Modal </VisuallyHidden>
					<Image
						src="/assets/icons/icon-close.svg"
						layout="fixed"
						height="24"
						width="24"
						alt="A icon of the letter X"
					/>
				</CloseButton>
				<ButtonContainer>
					<EmailInput onSubmit={handleSubmit}>
						<StyledLabel>Email</StyledLabel>
						<StyledInput
							type="email"
							placeholder="superlegitemail@example.com"
							name="email"
							required
						/>
						<AuthButton type="submit">Sign in with A Magic Link</AuthButton>
					</EmailInput>
					<ButtonDivider />
					<AuthButton
						onClick={() => signIn('github')}
						imgSrc={gitHubIconSrc}
						altText="Github's social media icon">
						Sign in with Github
					</AuthButton>

					<AuthButton
						onClick={() => signIn('google')}
						imgSrc={googleIconSrc}
						altText="Gmail's social media icon">
						Sigin in with Google
					</AuthButton>
					{/*<AuthButton onClick={() => signIn("github")} imgSrc={twitterIconSrc} altText="Twitter's social media icon">Sigin in with Twitter</AuthButton> */}
				</ButtonContainer>
				{/* <button onClick={() => signIn("github")}>Sign in with Email</button> */}
			</StyledDialog>
		</Wrapper>
	);
};

const Wrapper = styled(DialogOverlay)`
	z-index: 10;
`;

const StyledDialog = styled(DialogContent)`
	height: 100vh;
	width: 100%;
	margin-top: 0;

	position: relative;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: auto;
		max-width: 450px;
		height: 450px;
		margin-top: calc(50vh - 300px);

		border-radius: 10px;
		box-shadow: rgba(59, 59, 65, 0.2) 0px 7px 29px 0px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;

	& button {
		margin-bottom: 5px;
		margin-top: 5px;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;

	align-self: flex-end;

	&:hover {
		cursor: pointer;
	}
`;

const ButtonDivider = styled.hr`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 20px;
	margin-bottom: 0;

	border: none;
	border-top: solid 1px #ccc;
	overflow: visible;
	&::before {
		content: 'or';
		margin-top: -20px;
		padding: 8px;
		color: #888;
		background-color: ${(p) => p.theme.COLORS.white};
	}
`;

const EmailInput = styled.form`
	display: flex;
	flex-flow: column;
	width: 300px;
`;

const StyledInput = styled.input`
	${inputTextStyles};
	height: 40px;
	padding: 0px 16px;
	margin-bottom: 7px;

	border-radius: 5px;
	border: solid 1px ${(p) => p.theme.COLORS.dark[500]};
	box-shadow: inset 0 0.1rem 0.2rem rgb(0 0 0 / 5%);

	font-weight: ${(p) => p.theme.WEIGHTS.medium};
`;

const StyledLabel = styled.label`
	font-size: ${14 / 16}rem;
	color: ${(p) => p.theme.COLORS.dark[400]};
`;
