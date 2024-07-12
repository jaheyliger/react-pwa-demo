import React from 'react';

const Card = ({ item }) => {
	return (
		<div class='card'>
			<div class='content'>
				<ol>
					<li>
						{`${item.make.charAt(0).toUpperCase()}${item.make.slice(
							1
						)} ${item.model.charAt(0).toUpperCase()}${item.model.slice(1)}`}
					</li>
					<li>Class: {item.class}</li>
					<li>Drive: {item.drive}</li>
					<li>Fuel Drive: {item.fuel_type}</li>
					<li>Year: {item.year}</li>
				</ol>
			</div>
		</div>
	);
};

export default Card;
