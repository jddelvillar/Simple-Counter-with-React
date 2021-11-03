import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	return (
		<div className="row bg-dark text-white text-center">
			<i className="fas fa-clock col-2 fa-5x pt-3"></i>
			<div className="four col-2">{props.digitFour}</div>
			<div className="three col-2">{props.digitThree}</div>
			<div className="two col-2">{props.digitTwo}</div>
			<div className="one col-2">{props.digitOne}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default SecondsCounter;
