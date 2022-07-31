import { Button } from '@material-ui/core';
import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import ReactToPdf from 'react-to-pdf'

import Resume from './Resume';
const ExportResume = () => {
    const resumeRef = useRef();
  return (
    <>
      <ReactToPdf targetRef={resumeRef} filename="resume-gen.pdf" scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
        <Resume ref={resumeRef} />
        {/* <ReactToPrint
            content={() => resumeRef.current}
            trigger={() => <Button outlined>Print To PDF</Button>}
          /> */}
    </>
  )
}

export default ExportResume