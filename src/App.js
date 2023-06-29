import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const hasNext = index < questionsList.length - 1;

  function handleNextClick(answerIndex) {
    if (!hasNext) {
      alert('You have finished the quiz!');
      setIndex(0);
      return
    }
    if (answerIndex === questionsList[index].correctAnswer) {
      alert('Correct!');
      setIndex(index + 1);
    }
    else {  
      alert('Wrong!');
    }
  }

  let question = questionsList[index];
  let answers = question.answers.map((answer, i) => { return <li key={i}> <button onClick={()=>{handleNextClick(i)}}>{answer}</button></li>});
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>{answers}</ul>
    </div>
  );
}

export default App;
