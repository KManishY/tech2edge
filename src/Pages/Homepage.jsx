import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner.jsx";
import Characters from "../Components/Characters.jsx";
import Navbar from "../Components/Navbar.jsx";

const Homepage = () => {
	const imageApi = "https://demo.tech2edge.co/samples/";

	const [data, setdata] = useState([]);
	const getData = () => {
		fetch("https://demo.tech2edge.co/samples/data-sg")
			.then(response => response.json())
			.then(data => {
				setdata(data);
			});
	};
	// console.log(`${imageApi}${data.img}`);
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<Navbar style={{ position: "sticky", top: 0 }} />
			<Banner data={data.series} imageApi={imageApi} />
			<Characters data={data.characters} imageApi={imageApi} />
		</div>
	);
};

export default Homepage;
