import { Button } from '@material-ui/core';
import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import Resume from './Resume';
const ExportResume = () => {
    const resumeRef = useRef();
  return (
    <>
        <Resume ref={resumeRef} />
        {/* <ReactToPrint
            content={() => resumeRef.current}
            trigger={() => <Button outlined>Print To PDF</Button>}
          /> */}
    </>
  )
}

export default ExportResume