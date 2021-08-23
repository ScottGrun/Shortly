import React, { useEffect } from 'react';

import { Link } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import prisma from '../../lib/prisma';

type Props = {
	link?: Link | null;
};

const Url: React.FC<Props> = ({ link }) => {
	const router = useRouter();

	useEffect(() => {
		if (link) {
			window.location.replace(link.sourceLink);
		} else {
			router.replace('/');
		}
	}, [link, router]);

	return <div>Loading</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { linkId } = context.query;

	if (!linkId) {
		context.res.statusCode = 302;
		context.res.setHeader('Location', `/`);
		return { props: {} };
	}

	const link = await prisma.link.findUnique({
		where: {
			id: linkId as string,
		},
	});

	return { props: { link: link } };
};

export default Url;
