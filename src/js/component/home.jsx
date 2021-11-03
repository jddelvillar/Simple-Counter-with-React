import React from "react";

//include images into your bundle

import SecondsCounter from "./secondsCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<SecondsCounter/>
		</div>
	);
};

export default Home;