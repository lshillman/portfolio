import React from 'react';
import Headshot from '../../assets/images/luke-headshot.jpg'


export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className="aboutSection">
        <img id="headshot" src={Headshot} alt="Luke Hillman headshot"></img>
        <div>
          <p>
            Hi! I'm Luke, a UX designer/researcher/developer living in Berkeley, CA.
          </p>
          <p>
            I became a UX practitioner due to a simple belief that technology should work for humans. For my entire career, I have preferred to work toward the base of the hierarchy of needs, i.e., providing the essentials and relieving pain rather than focus on what the industry calls "delight." Delight is certainly nice, and I have nothing against it. It's just not where I live.
          </p>
          <p>
            This portfolio is built with React.js and showcases projects where I've been a primary developer. For a more UX-oriented portfolio, see <a href="https://lukehillman.net">lukehillman.net</a>.
          </p>
        </div>
      </div>
    </>
  );
}
