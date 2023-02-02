import { React } from 'react';

const Characters = ({ data: { top, left, height, width }}) =>
	<div
		className="characters"
		style={
			{
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				// backgroundImage: `url(${ process.env.PUBLIC_URL + data.backgroundImages })`,

			}
		}
	/>
	;

export default Characters;
