import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<ul className={css.btn_list}>
			{options.map((option) =>  (
				<button key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</ul>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;