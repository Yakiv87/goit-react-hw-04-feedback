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
    const result = good + neutral + bad;
    return result;
  };

  
  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  
  const onLeaveFeedback = (e) => {
    const name = e.target.name;
    
    switch (name) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  
  const objKey = Object.keys({ good, neutral, bad });

  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}
