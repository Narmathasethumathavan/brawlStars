import { React } from 'react';

const Rank = ({ data: { character: { rank }}}) =>
	<div>
		<img
			className="rhombus"
			src="/images/hexagon.png"
			alt="fs"
			width="40px"
			height="30px"
		/>
		<label className="rank">{rank}</label>
	</div>;

export default Rank;
