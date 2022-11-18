import React from "react";

import "../App.css";
const Characters = ({ data, imageApi }) => {
	console.log(data);
	return (
		<div className="gridBox">
			{data &&
				data.map(e =>
					<div key={e.id}>
						<div class="card" style={{ width: "18rem" }}>
							<img
								class="card-img-top"
								src={`${imageApi}${e.img}`}
								alt="Card image cap"
							/>
							<div class="card-body">
								<p>
									Name:{e.name}
								</p>
								<p>
									Age:{e.age}
								</p>
								<p>
									Profession:{e.profession}
								</p>
							</div>
						</div>
					</div>
				)}
		</div>
	);
};

export default Characters;

// age: 35;
// id: 1;
// img: "assets/images/sacred-games/sartaj-singh.jpg";
// name: "Sartaj Singh";
// profession: "Inspector";
