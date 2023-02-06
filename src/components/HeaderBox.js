import { React } from 'react';
const HeaderBox = ({ data: { trophies, rank }}) =>
	<div
		className="headerBox"
		style={
			{
				display: 'flex',
				justifyContent: 'space-around',
				top: -25,
				height: 20,
				width: 200,
			}
		}
	>
		<span>{rank}</span>
		<span>{trophies}   </span>
	</div>;

export default HeaderBox;
