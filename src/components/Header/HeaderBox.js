/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Rank from './Rank';
import Trophies from './Trophies';

const HeaderBox = (context) => {
	const { data: { trophies, rank }} = context;

	return (
		<div
			className="headerBox"
			style={
				{
					display: 'flex',
					justifyContent: 'space-between',
				}
			}
		>
			<Rank { ...{ ...context, data: { rank }} }/>
			<Trophies { ...{ ...context, data: { trophies }} }/>
		</div>);
};

export default HeaderBox;
