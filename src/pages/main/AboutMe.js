import Table from '../../components/Table';
import skills from '../../static/skills';

const AboutMe = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-full h-auto lg:flex">
      <div className="leading-6 lg:w-3/5 text-left">
        <p>
          As a software engineer/developer I do get excited about writing code that makes cool things happen. From implementing a database, to building the API that interacts with the data, and (striving to) building the smoothest UI your device can handle.
        </p>
        <br />
        <p>With prior professional experience as a graphic desginer, I love to use both creative and practical sides of my brain. Something about UI/UX because I like to design stuff and be nerdy.</p>
        <br />
        <p>Techology I have used so far to build said software are...</p>
        <br />
        <div className="block lg:flex">
          <div className="w-full h-auto">
            <Table data={skills} />
          </div>
        </div>
      </div>
      {/* Photo place holder */}
    </div>
  );
};

export default AboutMe;
