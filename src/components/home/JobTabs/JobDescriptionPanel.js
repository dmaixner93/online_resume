import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ProjectTitle from './JobTitle';
import Spacer from '../../Spacer';
import JobPanelList from './JobPanelList';

const JobDescriptionPanel = props => {
  const { value, index, details } = props;

  return (
    <div
      className="w-full text-left focus-within p-4"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Spacer height={4} />
          <ProjectTitle {...details} />
          <JobPanelList {...details} />
        </Box>
      )}
    </div>
  );
}

JobDescriptionPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default JobDescriptionPanel;