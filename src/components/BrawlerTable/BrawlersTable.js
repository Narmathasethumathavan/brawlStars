import { React } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const BrawlersTable = (context) => <div>
	<h1>Brawlers </h1>
	<table className="tableStyle">
		<TableHeader { ...context }/>
		<TableBody { ...context }/>
	</table>
</div>;

export default BrawlersTable;
