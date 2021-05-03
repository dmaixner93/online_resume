import Spacer from "./Spacer";

const SectionHeader = (props) => {
  const { sectionNum, title } = props;
  return (
    <div className="h-auto w-full">
      <Spacer height={8} />
      <div className="relative flex flex-row items-center h-16">
        {sectionNum ? (
          <h3 className="text-left font-semibold flex-shrink-0 text-2xl text-gray-800 dark:text-gray-100">
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
        <div className="ml-6 h-px w-72 bg-gray-600 dark:bg-gray-400 bg-opacity-25"></div>
      </div>
      <Spacer height={8} />
    </div>
  );
};

export default SectionHeader;
