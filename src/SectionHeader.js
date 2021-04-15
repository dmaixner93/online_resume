const SectionHeader = (props) => {
  const { sectionNum, title } = props;
  return (
    <div>
      <div className="relative flex flex-row items-center h-16">
        <h3 className="text-left font-semibold flex-shrink-0 text-2xl text-gray-800 dark:text-gray-100"><span className="text-blue-400 text-xl font-mono mr-2">{sectionNum}</span>&nbsp;{title}</h3>
        <div className="ml-6 h-px w-72 bg-gray-600 dark:bg-gray-400 bg-opacity-25"></div>
      </div>
      <div className="h-8 bg-transparent w-full"></div>
    </div>
  )
}

export default SectionHeader;