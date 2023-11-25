import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
  
	const countTotalFeedback = () => {
	  return good + neutral + bad;
	};
  
	const countPositiveFeedbackPercentage = () => {
	  const total = countTotalFeedback();
	  return total ? Math.round((good * 100) / total) : 0;
	};
  
	const onLeaveFeedback = (name) => () => {
	  switch (name) {
		case 'good':
		  setGood(prevState => prevState + 1);
		  break;
		case 'neutral':
		  setNeutral(prevState => prevState + 1);
		  break;
		case 'bad':  
		  setBad(prevState => prevState + 1);
		  break;
		default:
		  return;
	  }
	};
  
	const feedbackNames = ['good', 'neutral', 'bad'];
  
	return (
	  <>
		<Section title="Please leave feedback">
		  <FeedbackOptions 
			options={feedbackNames}  
			onLeaveFeedback={onLeaveFeedback} 
		  />
		</Section>
  
		{countTotalFeedback() ? (
		  <Section title="Statistics">
			<Statistics 
			  good={good}
			  neutral={neutral}
			  bad={bad}
			  total={countTotalFeedback()}
			  positivePercentage={countPositiveFeedbackPercentage()}
			/>
		  </Section>
		) : (
		  <Notification message="No feedback given" />
		)}
	  </>
	);
  }