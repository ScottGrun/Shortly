import { ReactElement, useEffect, useRef, useState } from 'react';

import { Link } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { CallToActionBanner } from '../components/CallToActionBanner/CallToActionBanner';
import { FeatureSection } from '../components/FeatureSection/FeatureSection';
import { Footer } from '../components/Footer/Footer';
import { LandingSection } from '../components/LandingSection/LandingSection';
import LinkShortener from '../components/LinkShortener/LinkShortener';
import { LoginModal } from '../components/LoginModal/LoginModal';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { NavBar } from '../components/NavBar/NavBar';
import { ShortenedLink } from '../components/ShortenedLink/ShortenedLink';
import { ShortenedLinksContainer } from '../components/ShortenedLinksContainer/ShortenedLinksContainer';
import prisma from '../lib/prisma';

interface HomePageTypes {
	dbLinks: Link[];
	session: Session;
}

export default function Home({
	dbLinks,
	session,
}: HomePageTypes): ReactElement {
	const [userLinks, setUserLinks] = useState<Link[]>([]);
	const [showDialog, setShowDialog] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const focusRef = useRef<HTMLInputElement>(null);
	const { error } = useRouter().query;

	useEffect(() => {
		// if logged in set links to be that of the DB
		if (session) {
			setUserLinks(() => dbLinks);
		} else {
			// If not logged in save links as guest user
			const localLinks = localStorage.getItem('localLinks');

			if (localLinks && JSON.parse(localLinks).length > 0) {
				setUserLinks(() => JSON.parse(localLinks));
			}
		}
	}, [dbLinks, session]);

	useEffect(() => {
		if (error) setShowDialog(true);
	}, [error]);

	const handleFocus = () => {
		if (focusRef.current) {
			focusRef.current.focus();
			focusRef.current.scrollIntoView({ block: 'center' });
		}
	};

	return (
		<>
			<Head>
				<title>Shortly | Scott&apos;s URL Shortner</title>
				<meta
					name="description"
					content="Scott's URL shortening app, also, he's looking for a Frontend Developer job ????!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MobileMenu
				session={session}
				setShowDialog={setShowDialog}
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
			<LoginModal
				error={error}
				showDialog={showDialog}
				setShowDialog={setShowDialog}
			/>
			<Wrapper>
				<NavWrapper>
					<StyledNav
						session={session}
						setShowDialog={setShowDialog}
						setMenuOpen={setMenuOpen}
					/>
				</NavWrapper>
				<StyledLandingSection handleFocus={handleFocus} />
				<StyledMain>
					<LinkShortener
						ref={focusRef}
						session={session}
						setUserLinks={setUserLinks}
					/>
					{userLinks.length > 0 && (
						<StyledLinksContainer>
							{userLinks
								.slice(0)
								.reverse()
								.map((l: Link) => (
									<ShortenedLink
										key={l.id}
										sourceLink={l.sourceLink}
										shortLink={l.shortLink}
									/>
								))}
						</StyledLinksContainer>
					)}
				</StyledMain>
				<StyledFeatureSection />
				<StyledCTABanner
					title="Boost your links today"
					buttonText="Get Started"
				/>
				<StyledFooterWrapper>
					<Footer />
				</StyledFooterWrapper>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 100%;

	width: 100%;
	overflow-x: hidden;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		grid-template-columns: 1fr minmax(auto, 1440px) 1fr;
		overflow-x: revert;
		margin: 0 auto;
	}
`;

const StyledNav = styled(NavBar)`
	grid-column: 1;
	max-width: 1440px;

	padding: 0 16px;
	padding-top: 40px;
	margin: 0 auto;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		padding-left: 24px;
		padding-right: 24px;
	}
`;

const NavWrapper = styled.div`
	background-color: ${(p) => p.theme.COLORS.white};
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		grid-column: 1 / -1;
	}
`;

const StyledLandingSection = styled(LandingSection)`
	grid-column: 1;
	padding-top: 78px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		grid-column: 1 / -1;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		padding-left: 24px;
		padding-right: 24px;
	}
`;

const StyledMain = styled.main`
	margin-top: -84px;
	grid-column: 1;
	padding: 0 16px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		grid-column: 2;
		padding-left: 24px;
		padding-right: 24px;
	}
`;

// Links
const StyledLinksContainer = styled(ShortenedLinksContainer)`
	grid-column: 1;
	margin-top: 48px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		grid-column: 2;
		margin-top: 24px;
	}
`;

// Features
const StyledFeatureSection = styled(FeatureSection)`
	grid-column: 1;
	margin-top: 80px;
	padding: 0 16px;

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-top: 120px;
		grid-column: 2;
	}
`;

const StyledCTABanner = styled(CallToActionBanner)`
	grid-column: 1;
	margin-top: 80px;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 120px;
		grid-column: 1 / -1;
	}
`;

// Footer
const StyledFooterWrapper = styled.footer`
	grid-column: 1;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		grid-column: 1 / -1;
	}
`;

// Server Stuff
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	if (!session) {
		return { props: { links: [] } };
	}

	const user = await prisma.session.findUnique({
		where: {
			accessToken: session.accessToken as string,
		},
		select: {
			userId: true,
		},
	});

	const links = await prisma.link.findMany({
		where: {
			userId: user?.userId,
		},
		select: {
			id: true,
			shortLink: true,
			sourceLink: true,
		},
	});

	return { props: { dbLinks: links, session } };
};
