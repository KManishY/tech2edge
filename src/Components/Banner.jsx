import React, { useEffect, useState } from "react";

const Banner = ({ data, imageApi }) => {
	// console.log(data, imageApi);
	return (
		<div>
			<img src={`${imageApi}${data && data.img}`} alt="Sacred Games" />
			<h1>
				{data && data.title}
			</h1>
			<p>
				{data && data.desc}
			</p>
		</div>
	);
};

export default Banner;
