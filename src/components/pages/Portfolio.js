import React from 'react';
import Project from '../Project'
import AngloPiano from '../../assets/images/anglo-piano.jpg'
import OnlyFarms from '../../assets/images/onlyfarms.jpg'
import GenShip from '../../assets/images/generation-ship-calc.jpg'
import BerkMo from '../../assets/images/berkmo.jpg'
import Scheduler from '../../assets/images/scheduler.jpg'


const projects = [
  {
    id: 1,
    title: "Anglo Piano",
    description: "A fun app built in Axure RP to help anglo concertina players find chords and compose music. Currently being re-implemented with vanilla JS.",
    image: AngloPiano,
    repo: "https://github.com/lshillman/anglo-piano",
    deployed: "https://github.com/lshillman/oscillatornode-practice"
  },
  {
    id: 2,
    title: "OnlyFarms",
    description: "A small-scale farm budgeting app. Keep track of your livestock and their associated feed costs.",
    image: OnlyFarms,
    repo: "https://github.com/lshillman/secret-farm",
    deployed: "https://onlyfarms.herokuapp.com/"
  },
  {
    id: 3,
    title: "Interstellar Colony Ship Feasibility Calculator",
    description: "We know about more exoplanets now than at any point in history. Ever wonder what it will take to visit them?",
    image: GenShip,
    repo: "https://github.com/lshillman/generation-ship-calculator",
    deployed: "https://lshillman.github.io/generation-ship-calculator/"
  },
  {
    id: 4,
    title: "Berkeley Morris Wordpress Theme",
    description: "A colorful and responsive Wordpress theme reflecting the exotic history of Morris dancing in Berkeley, CA.",
    image: BerkMo,
    repo: "https://github.com/lshillman/berkmo-wp-theme",
    deployed: "https://berkeleymorris.org/"
  },
  {
    id: 5,
    title: "Shift Scheduler",
    description: "A C++ app that takes a CSV of employee availabilities and outputs a weekly schedule. Originally written for Georgetown University's public safety department. This isn't a web app; you'll need to download the source and run it locally.",
    image: Scheduler,
    repo: "https://github.com/lshillman/shift-scheduler",
    deployed: "https://github.com/lshillman/shift-scheduler"
  },
];

export default function Portfolio() {
  return (
    <>
    <div>
      <h1>Portfolio</h1>
      <p>
        Look on my works, ye mighty, and despair!
      </p>
    </div>
    {/* <ProjectList projects={projects} /> */}
    <div id="projectContainer">
      {projects.map(item => (
          <Project project={item} />
        ))}
    </div>

    </>
  );
}
