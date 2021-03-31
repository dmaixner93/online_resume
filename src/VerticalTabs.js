import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import Jobs from './assets/Jobs';
import { v4 as uuidv4 } from 'uuid';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs = {labels: [], panels: []};

  Jobs.forEach(job => {
    tabs.labels.push(
      <Tab 
        className="focus:outline-none"
        label={job.company}
        key={uuidv4()}
        value={job.id}
      />)
    tabs.panels.push(
      <TabPanel
        key={uuidv4()}
        description={job.description}
        value={value}
        index={job.id}
      />)
  })

  return (
    <div className="bg-transparent flew-grow flex h-72 dev-border">
      <Tabs
        orientation="vertical"
        variant="standard"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="Job experience tabs"
        className="border-r border-gray-100 border-opacity-10"
      >
        {tabs.labels}
      </Tabs>
      {tabs.panels}
    </div>
  )
}