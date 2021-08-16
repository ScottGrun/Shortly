import React from 'react';

import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export const ShortenedLinksContainer: React.FC<Props> = ({
	children,
	className,
}) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.ul`
	display: flex;
	flex-flow: column;
	gap: 16px;
`;
