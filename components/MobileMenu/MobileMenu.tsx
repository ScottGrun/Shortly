import React, { Dispatch, SetStateAction } from 'react';

import VisuallyHidden from '@reach/visually-hidden';
import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import styled from 'styled-components';

import { navLinkTextStyles } from '../../styles/typography';
import { Button } from '../Button/Button';
interface Props {
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	setShowDialog: Dispatch<SetStateAction<boolean>>;
	menuOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({
	setMenuOpen,
	menuOpen,
	setShowDialog,
}) => {
	const [session] = useSession();
	const openModal = () => setShowDialog(true);
	const closeMenu = () => setMenuOpen(false);

	return (
		<Wrapper menuOpen={menuOpen}>
			<CloseButton onClick={closeMenu}>
				<VisuallyHidden>Close Menu</VisuallyHidden>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#FFFF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-x">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</CloseButton>
			<Menu>
				<Item>
					<Link href="#" passHref>
						<a>Features</a>
					</Link>
				</Item>
				<Item>
					<Link href="#" passHref>
						<a>Pricing</a>
					</Link>
				</Item>
				<Item>
					<Link href="#" passHref>
						<a>Resources</a>
					</Link>
				</Item>
				<Divider />
				{session ? (
					<>
						<UserName>{session.user?.name}</UserName>

						<Button variant="secondary" onClick={() => signOut()}>
							Sign Out
						</Button>
					</>
				) : (
					<>
						<Button variant="primary" onClick={() => openModal()}>
							Sign In
						</Button>
					</>
				)}
			</Menu>
		</Wrapper>
	);
};

const CloseButton = styled.button`
	position: absolute;
	display: flex;
	top: 40px;
	right: 16px;
	color: white;
`;

const Wrapper = styled.nav<{ menuOpen: boolean }>`
	display: ${(p) => (p.menuOpen ? 'flex' : 'none')};
	z-index: 1;
	position: fixed;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-color: ${(p) => p.theme.COLORS.secondary[900]};
`;

const Menu = styled.ul`
	display: flex;
	flex-flow: column;
	align-items: center;
	gap: 30px;
	width: 100%;
	padding: 24px;
`;

const Item = styled.li`
	${navLinkTextStyles};
	font-size: ${24 / 16}rem;
	color: ${(p) => p.theme.COLORS.white};
	transition: color 200ms ease;
	&:hover {
		color: ${(p) => p.theme.COLORS.dark[700]};
	}
`;

const Divider = styled.hr`
	width: 100%;
	border: 0;
	height: 2px;
	background-color: ${(p) => p.theme.COLORS.dark[700]};
	opacity: 0.25;
`;

const UserName = styled.p`
	${navLinkTextStyles};
	font-size: ${18 / 16}rem;

	color: ${(p) => p.theme.COLORS.dark[200]};
`;
