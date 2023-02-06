import { React } from 'react';

const polygon
	= 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

const Rank = ({ data: { rank }}) =>
	<div
		className="rhombus"
		style={ {
			clipPath: polygon,
			backgroundColor: 'gold',
		} }
	>
		{rank}
	</div>;

export default Rank;
