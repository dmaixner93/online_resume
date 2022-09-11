import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectTitle from './JobTitle';
import Spacer from '../Spacer';
import JobPanelList from './JobPanelList';

const JobDescriptionPanel = props => {
  const { value, index, details } = props;

  return (
    <div
      className="max-w-2xl w-full text-left focus-within"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <ProjectTitle {...details} />
          <Spacer height={4} />
          <Typography>{details?.body?.description}</Typography>
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