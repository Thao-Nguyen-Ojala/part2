import React from "react";

const Header = (props) => {
  return props.course.name;
};
const Content = (props) => {
  return props.parts.map((part, index) => (
    <p key={index}> {part.name + " " + part.exercise}</p>
  ));
};

const Total = (props) => {
  let a = props.parts.reduce((acc, part) => {
    return acc + part.exercise;
  }, 0);

  return a;
};

const Course = ({ course }) => (
  <div>
    <h1>
      <Header course={course} />
    </h1>
    <div>
      <Content parts={course.parts} />
    </div>
    <h4>
      total of <Total parts={course.parts} /> exercises
    </h4>
  </div>
);

export default Course;
