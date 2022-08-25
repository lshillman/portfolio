import React from 'react';
import ProjectList from '../ProjectList'

const projects = [
  {
    id: 1,
    title: "Anglo Piano",
    description: "A fun app build in Axure RP to help anglo concertina players find chords and compose music",
    image: "anglopiano.jpg",
    repo: "https://github.com/lshillman/anglo-piano",
    deployed: "https://github.com/lshillman/anglo-piano"
  }
];

export default function Portfolio() {
  return (
    <>
    <div>
      <h1>Portfolio</h1>
      <p>
        Look on my works, ye mighty, and despair!
      </p>
      <p>[image: the lone and level sands stretch far away]</p>
    </div>
    <ProjectList projects={projects} />
    </>
  );
}
