const ProjectTitle = (props) => {
  const { jobTitle, company } = props;
  return (
    <h3 className="text-blue-500 font-bold text-base lg:text-xl dark:text-blue-300">
      <span className="text-gray-900 dark:text-gray-300">{jobTitle}</span><br className="block lg:hidden" />&nbsp;@{company}
    </h3>
  )
}

export default ProjectTitle;