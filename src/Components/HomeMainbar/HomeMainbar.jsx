import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeMainbar.css";
import Questions from "./Questions";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  let questionsList = [
    {
      id: 1,
      votes: 3,
      questionTitle: "What is a function?",
      no0fAnswers: 2,
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mangoDB"],
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      no0fAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      askedOn: "jan 1",
      userPosted: "mano",
    },
  ];

  const location = useLocation();

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to="/AskQuesion" className="ask-btn">
          Ask Quesion
        </Link>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions </p>
            <>
              <QuestionList questionsList={questionsList} />
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
