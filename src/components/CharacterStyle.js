import { React } from 'react';
import Characters from './Characters';

const CharacterStyle = (context) =>
	context.config.characters.map((character, key) =>
		<Characters key={ key } { ...{ ...context, data: character } }/>);

export default CharacterStyle;
