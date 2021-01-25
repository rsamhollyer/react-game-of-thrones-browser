import React from "react";

function Details({ character }) {
	return (
		<div>
			<h3>{character.name || character.aliases[0]}</h3>
			<ul>
				{Object.entries(character).map(([key, value]) => {
					return key !== "name" && value && value[0] !== "" ? (
						<li>
							{key}: {value}
						</li>
					) : null;
					// value !== null &&
					// value !== "" &&
					// value !== undefined &&
					// value !== 0 &&
					// value[0] !== ""
					// ? (
					// 	<li>
					// 		{key}: {value}
					// 	</li>
					// ) : null;
				})}
			</ul>
		</div>
	);
}

export default Details;
