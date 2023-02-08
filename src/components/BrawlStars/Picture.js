import { React } from 'react';

const Picture = ({ data: { character: { image }}}) =>
	<span>
		<img
			src={ image }
			alt="fs"
			width="200px"
			height="150px"
		/>
	</span>;

export default Picture;
