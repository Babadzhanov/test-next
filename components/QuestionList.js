import QuestionContainer from "./QuestionContainer";

let props = {
    questions: [
      {
        id: 1,
        question: "What (European) unladen swallow?",
        answer: "1 meters per second"
      },
      {
        id: 2,
        question: "the average the airspeed velocity of a ?",
        answer: "2 meters per second"
      },
      {
        id: 3,
        question: "unladen swallow?",
        answer: "3 meters per second"
      },
      {
        id: 4,
        question: "airspeed velocity of a?",
        answer: "4 meters per second"
      }
    ]
  };

const QuestionList = () => {
    return (
    <div>
    {props.questions.map(question => {
        return (<QuestionContainer key={question.id} {...question} />
    );
    })}
    </div>
  );
}

export default QuestionList;