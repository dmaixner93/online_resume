import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Jobs from "./assets/jobs";
import { v4 as uuidv4 } from "uuid";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs = { labels: [], panels: [] };

  Jobs.forEach((job) => {
    tabs.labels.push(
      <Tab
        className="text-gray-600 dark:text-gray-300 focus:outline-none"
        disableFocusRipple={true}
        disableRipple={true}
        label={job.company}
        key={uuidv4()}
        value={job.id}
        {...a11yProps(job.id)}
        // classes={{  }}
      />
    );
    tabs.panels.push(
      <TabPanel
        key={uuidv4()}
        description={job.description}
        value={value}
        index={job.id}
        className="max-w-2xl text-gray-600 dark:text-gray-300"
      />
    );
  });

  return (
    <div className="bg-transparent text-gray-600 dark:text-gray-300 flew-grow flex h-72">
      <Tabs
        orientation="vertical"
        variant="standard"
        indicatorColor="secondary"
        textColor="inherit"
        value={value}
        onChange={handleChange}
        aria-label="Job experience tabs"
        className="border-r bg-gray-50 dark:bg-gray-900 dark:border-gray-100 border-opacity-10 dark:border-opacity-10">
        {tabs.labels}
      </Tabs>
      {tabs.panels}
    </div>
  );
}
