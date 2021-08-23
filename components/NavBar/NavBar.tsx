import { Dispatch, SetStateAction } from 'react';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import menuIconSrc from '../../public/assets/icons/icon-menu.svg';
import logoSrc from '../../public/assets/logo.svg';
import { navLinkTextStyles } from '../../styles/typography';
import { Button } from '../Button/Button';

interface NavBarProps {
	className?: string;
	setShowDialog: Dispatch<SetStateAction<boolean>>;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	session: Session;
}

export const NavBar: React.FC<NavBarProps> = ({
	setShowDialog,
	setMenuOpen,
	className,
	session,
}) => {
	const openModal = () => setShowDialog(true);
	const openMenu = () => setMenuOpen(true);

	return (
		<Wrapper className={className}>
			<Image
				src={logoSrc}
				layout="fixed"
				priority={true}
				alt="The word Shortly"
			/>
			<Nav>
				<NavLinksWrapper>
					<li>
						<Link href="#" passHref>
							<NavItem>Features</NavItem>
						</Link>
					</li>
					<li>
						<Link href="#" passHref>
							<NavItem>Pricing</NavItem>
						</Link>
					</li>
					<li>
						<Link href="#" passHref>
							<NavItem>Resources</NavItem>
						</Link>
					</li>
				</NavLinksWrapper>
			</Nav>

			{session ? (
				<>
					<UserName>{session.user?.name}</UserName>

					<LogoutBtn variant="secondary" onClick={() => signOut()}>
						Sign Out
					</LogoutBtn>
				</>
			) : (
				<>
					<SignInBtn variant="primary" onClick={() => openModal()}>
						Sign In
					</SignInBtn>
				</>
			)}

			<MenuButton onClick={openMenu}>
				<Image
					src={menuIconSrc}
					layout="fixed"
					width="24"
					height="21"
					alt="A menu icon"
				/>
			</MenuButton>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Nav = styled.nav`
	display: none;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: flex;
		margin-left: 45px;
		margin-right: auto;
	}
`;

const NavLinksWrapper = styled.ul`
	display: flex;
	gap: 32px;
`;

const NavItem = styled.a`
	${navLinkTextStyles};
	color: ${(p) => p.theme.COLORS.dark[700]};
	transition: color 200ms ease;
	&:hover {
		color: ${(p) => p.theme.COLORS.dark[900]};
	}
`;

const MenuButton = styled.button`
	display: flex;
	margin-left: auto;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;

const SignInBtn = styled(Button)`
	display: none;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: revert;
	} ;
`;

const LogoutBtn = styled(Button)`
	display: none;
	margin-left: 16px;
	background-color: ${(p) => p.theme.COLORS.dark[200]};
	color: ${(p) => p.theme.COLORS.dark[700]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: revert;
	} ;
`;

const UserName = styled.p`
	${navLinkTextStyles};
	display: none;
	padding-left: 12px;
	margin-right: 10px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: revert;
	} ;
`;
