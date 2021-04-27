import Table from './Table';
import aboutInfo from './static/aboutMe';

const AboutMe = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-full h-auto flex">
      <div className="leading-6 w-3/5 text-left">
        <p>
          Specializing in web applications, I am eager to begin using my
          education and skills in web development to take an even more hands-on
          approach. I am passionate about creating and building technology
          people interact with every day. I strive to build applications that
          provide an exceptional user experience.
        </p>
        <br />
        <p>Some of my skills include:</p>
        <br />
        <div className="flex font-mono">
          <div className="w-1/2 h-auto">
            <Table data={aboutInfo.skills.column_1} />
          </div>
          <div className="w-1/2 h-auto">
            <Table data={aboutInfo.skills.column_2} />
          </div>
        </div>
      </div>
      {/* Photo place holder */}
      <div className="w-2/5 bg-gray-200 bg-opacity-50 mx-8"></div>
    </div>
  );
};

export default AboutMe;
