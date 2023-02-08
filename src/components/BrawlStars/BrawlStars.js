import { React } from 'react';
import Box from './Box';

const BrawlStars = (context) => {
	const { state: { characters }} = context;

	return (
		<div>
			{characters.map((character, key) =>
				<Box
					key={ key }
					{ ...{ ...context,
						data: { character, key }} }
				/>)}
		</div>);
};

export default BrawlStars;
