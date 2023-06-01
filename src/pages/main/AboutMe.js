import Table from '../../components/Table';
import skills from '../../static/skills';

const AboutMe = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-full h-auto lg:flex">
      <div className="leading-6 lg:w-3/5 text-left">
        <p>
          I am passionate about creating and building technology people interact with every day. I strive to build applications that provide improve user experience, are intuitive, and look good. 
        </p>
        <br />
        <p>Technology I have worked with so far...</p>
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
