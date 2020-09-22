import React from "react";
import "./App.css";
import Course from "./components";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamantals of React",
          exercise: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercise: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercise: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercise: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Nose.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercise: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercise: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default App;
