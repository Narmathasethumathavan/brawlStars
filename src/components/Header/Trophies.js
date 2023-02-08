/* eslint-disable no-magic-numbers */
import { React } from 'react';

const Trophies = ({ data: { trophies }}) =>
	<span
		className="bar"
		style={ { width: `${ trophies * 10 }px` } }
	>
		<img
			src="/images/trophies.jpeg"
			alt="fs"
			width="30px"
			height="20px"
			borderRadius="50%"
		/>
		{trophies}
	</span>;

export default Trophies;
