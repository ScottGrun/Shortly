import React, { useEffect } from 'react';

import { Link } from '@prisma/client';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

import prisma from '../../lib/prisma';

type Props = {
	link?: Link | null;
};

export const Url: React.FC<Props> = ({ link }) => {
	const router = useRouter();

	useEffect(() => {
		if (link) {
			window.location.replace(link.sourceLink);
		} else {
			router.replace('/');
		}
	}, [link, router]);

	return <div></div>;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
	const { shortLink } = ctx.query;

	const link = await prisma.link.findUnique({
		where: {
			shortLink: shortLink,
		},
	});

	return { props: { link: link } };
};
