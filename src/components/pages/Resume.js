import React from 'react';
import ResumePdf from '../../assets/images/luke_hillman_dev_resume_2022.pdf'

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <iframe id="resume" title="resume" src={ResumePdf}></iframe>
    </>
  );
}
