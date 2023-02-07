/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Trophies from './Trophies';

const HeaderBox = (context) => {
	const { data: { character: { trophies }}} = context;

	return (
		<div className="headerBox">
			<Trophies { ...{ ...context, data: { trophies }} }/>
		</div>);
};

export default HeaderBox;
