const SectionHeader = (props) => {
  const { sectionNum, title, disableDivider } = props;
  return (
    <div className="h-auto w-full">
      <div className="relative flex flex-row items-center h-16">
        {sectionNum ? (
          <h3 className="text-left tracking-wide font-semibold flex-shrink-0 text-2xl text-gray-800 dark:text-gray-100">
            <span className="text-blue-500 text-xl font-mono mr-2">
              {sectionNum}&nbsp;
            </span>
            {title}
          </h3>
        ) : (
          <h3 className="text-left font-semibold flex-shrink-0 text-2xl text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        )}
        { disableDivider ? (null) :
          (<div className="ml-6 h-px w-72 bg-gray-600 dark:bg-gray-400 bg-opacity-25"></div>)
        }
      </div>
    </div>
  );
};

export default SectionHeader;
