import type {SVGProps} from 'react';
import React from 'react';

export const RenderIcon: React.FC<{
	svgProps: SVGProps<SVGSVGElement>;
}> = (props) => {
	return (
		<svg
			{...props.svgProps}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill={'currentColor'}
				d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
			/>
		</svg>
	);
};

export const ThinRenderIcon: React.FC<{
	svgProps: SVGProps<SVGSVGElement>;
}> = (props) => {
	return (
		<svg
			{...props.svgProps}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				fill={'currentColor'}
				d="M188.9 372l-50.4-50.4c18.6-42.6 61.7-137.7 95.1-187C304.6 30.1 409 24.6 475.7 36.3c11.7 66.7 6.2 171.1-98.4 242c-49.4 33.5-145.5 75.6-188.4 93.7zm-79.9-62.8c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8L224 496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-90.2 0c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.8 .7 15.6s8.1 7.6 13.6 7.6H118.5c-3.6 8-6.8 15.2-9.4 21.2zM256 470.1l0-92.5c30.3-13.7 65.4-30.3 96-47v71.7c0 12.1-6.8 23.2-17.7 28.6L256 470.1zM109.7 160h71.5c-16.9 30.7-34 65.8-48.1 96H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z"
			/>
		</svg>
	);
};
