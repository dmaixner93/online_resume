import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import JobDescriptionPanel from "./JobDescriptionPanel";
import JobData from "../../static/jobData";
import { v4 as uuidv4 } from "uuid";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Jobs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs = { labels: [], panels: [] };

  JobData.forEach((job) => {
    tabs.labels.push(
      <Tab
        className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        disableFocusRipple={true}
        disableRipple={true}
        label={job.company}
        key={uuidv4()}
        value={job.id}
        {...a11yProps(job.id)}
      />
    );
    tabs.panels.push(
      <JobDescriptionPanel
        key={uuidv4()}
        details={job}
        value={value}
        index={job.id}
        className="max-w-2xl"
      />
    );
  });

  return (
    <div className="bg-transparent flew-grow flex min-h-80 h-auto text-gray-600 dark:text-gray-300">
      <Tabs
        orientation="vertical"
        variant="standard"
        indicatorColor="secondary"
        textColor="inherit"
        value={value}
        onChange={handleChange}
        aria-label="Job experience tabs"
        className="border-r bg-transparent dark:border-gray-100 border-opacity-10 dark:border-opacity-10">
        {tabs.labels}
      </Tabs>
      {tabs.panels}
    </div>
  );
}