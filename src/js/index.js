//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import SecondsCounter from "./component/secondsCounter.jsx";
//render your react application
let timing = 0;
setInterval(() => {
	ReactDOM.render(
		<SecondsCounter
			digitFour={Math.floor(timing / 1000) % 10}
			digitThree={Math.floor(timing / 100) % 10}
			digitTwo={Math.floor(timing / 10) % 10}
			digitOne={timing % 10}
		/>,
		document.querySelector("#app")
	);
	timing += 1;
	console.log(timing);
}, 1000);
