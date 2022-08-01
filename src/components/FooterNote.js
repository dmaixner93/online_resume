import React from "react";
import Spacer from './Spacer';

const FooterNote = ({ text }) => {
  return (
    <React.Fragment>
      <Spacer height={16} />
      <div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="mt-4 text-gray-400 text-xs dark:text-gray-600">
        {text}
      </div>
      <Spacer height={8} />
    </React.Fragment>
  )
}

export default FooterNote;