import { React } from 'react';
import Box from './Box';

const BrawlStars = (context) => {
	const { state: { characters }} = context;

	return characters.map((character, key) =>
		<tr key={ key }>
			<Box { ...{ ...context, data: { character, key }} }/></tr>);
};

export default BrawlStars;
