import { React } from 'react';

const images = (path) =>
	<img
		src={ path }
		alt="fs"
		width="150px"
		height="150px"
	/>;

const BrawlerData = (context) => {
	const { config: { headers }, data: character } = context;

	return headers.map((header, index) =>
		<td key={ index } className="columnStyle">
			{character[header] === character.image
				? images(character.image)
				: character[header]}</td>);
};

const TableBody = (context) => {
	const { state: { characters }} = context;

	return <tbody>{
		characters.map((character, key) =>
			<tr key={ key } className="columnStyle">
				<BrawlerData { ...{ ...context, data: character } }/></tr>)
	}
	</tbody>;
};

export default TableBody;
