import { React } from 'react';
import sortingFunction from '../../services/sortingFunction';
import Box from './Box';

const BrawlStars = (context) => {
	const charactersWithStyle = sortingFunction.getStyleCharacters(context);

	return (
		<div>
			{charactersWithStyle.map((character, key,) =>
				<Box
					key={ key }
					{ ...{
						...context,
						data: { character },
					} }
				/>)}
		</div>);
};

export default BrawlStars;
