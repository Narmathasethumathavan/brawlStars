import { React } from 'react';

const Trophies = ({ data: { trophies }}) =>
	<div
		className="bar"
		style={ { display: 'flex',
			justifyContent: 'flex-start',
			width: `${ trophies }px` } }
	>
		<span>{trophies}</span>
		<span>
			<img
				className="trophies"
				src="/images/trophies.jpeg"
				alt="fs"
				width="30px"
				height="20px"
			/>
		</span>
	</div>;

export default Trophies;
