import React from 'react';

import styled from 'styled-components';

// Thanks to Tobias for the awesome free spinners I adapted one of his for the component below
// https://tobiasahlin.com/spinkit/

export const Spinner: React.FC = () => (
	<Wrapper>
		<div className="bounce1"></div>
		<div className="bounce2"></div>
		<div className="bounce3"></div>
	</Wrapper>
);

const Wrapper = styled.div`
	margin: auto 0;
	text-align: center;

	div {
		width: 12px;
		height: 12px;
		background-color: white;

		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}

	div:not(:last-child) {
		margin-right: 5px;
	}

	.bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	.bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}

	@-webkit-keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;
