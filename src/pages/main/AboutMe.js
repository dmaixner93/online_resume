import Table from '../../components/Table';
import skills from '../../static/skills';

const AboutMe = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-full h-auto flex">
      <div className="leading-6 w-3/5 text-left">
        <p>
          I am passionate about creating and building technology people interact with every day. I strive to build applications that provide improve user experience (for clients and owners), are intuitive, and look good. 
        </p>
        <br />
        <p>Some skills I have become familiar with so far</p>
        <br />
        <div className="flex">
          <div className="w-1/2 h-auto">
            <Table data={skills.column_1} />
          </div>
          <div className="w-1/2 h-auto">
            <Table data={skills.column_2} />
          </div>
        </div>
      </div>
      {/* Photo place holder */}
      <div className="relative w-2/5 bg-gray-200 bg-opacity-50 mx-8">
        <div className="absolute z-10 w-full h-full bg-blue-500 dark:bg-blue-400 mix-blend-overlay dark:mix-blend-darken opacity-90"></div>
        <img className="filter grayscale" src={require('../../static/media/dm_333_297.JPG').default} alt="self portrait" />
      </div>
    </div>
  );
};

export default AboutMe;
