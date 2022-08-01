import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectTitle from './ProjectTitle';
import Spacer from '../Spacer';
import TabPanelList from '../Tabs/TabPanelList';

const TabPanel = props => {
  const { value, index, details } = props;

  return (
    <div
      className="max-w-2xl w-full text-left"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <ProjectTitle {...details} />
          <Spacer height={4} />
          <Typography>{details.body.description}</Typography>
          <TabPanelList {...details} />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;