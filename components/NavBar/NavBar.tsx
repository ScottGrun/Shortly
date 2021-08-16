import { Dispatch, SetStateAction } from 'react';

import { useSession, signOut } from 'next-auth/client';
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
}

export const NavBar: React.FC<NavBarProps> = ({ setShowDialog, className }) => {
	const [session] = useSession();
	const openModal = () => setShowDialog(true);

	return (
		<Wrapper className={className}>
			<Image src={logoSrc} layout="intrinsic" alt="The word Shortly" />
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
					<SignUpBtn variant="primary" onClick={() => openModal()}>
						Sign In
					</SignUpBtn>
				</>
			)}

			<MenuButton>
				<Image src={menuIconSrc} alt="A menu icon" />
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

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: flex;

		margin-left: 45px;
		margin-right: auto;
	}
`;

const NavLinksWrapper = styled.ul`
	display: none;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: flex;
		gap: 32px;
	}
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
	margin-left: auto;
	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: none;
	}
`;

const SignUpBtn = styled(Button)`
	display: none;
	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: revert;
	} ;
`;

const LogoutBtn = styled(Button)`
	display: none;
	margin-left: 16px;
	background-color: ${(p) => p.theme.COLORS.dark[200]};
	color: ${(p) => p.theme.COLORS.dark[700]};

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: revert;
	} ;
`;

const UserName = styled.p`
	${navLinkTextStyles};
	display: none;
	padding-left: 12px;
	margin-right: 20px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		display: revert;
	} ;
`;
