const AboutMe = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 w-full h-auto flex">
      <div className="leading-6 w-3/5 text-left">
        <p>Specializing in web applications, I am eager to begin using my education and skills in web development to take an even more hands-on approach. I am passionate about creating and building technology people interact with every day. I strive to build applications that provide an exceptional user experience.</p>
        <br/>
        <p>Some of my skills include:</p>
        <br/>
        <div className="flex font-mono">
          <ul className="list-none leading-7 w-1/2">
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Python</li>
          </ul>
          <ul className="list-none leading-7 w-1/2">
            <li>Docker</li>
            <li>Django</li>
            <li>Adobe Suite</li>
            <li>Java (Mild Experience)</li>
          </ul>          
        </div>
      </div>
      <div className="w-2/5 bg-gray-200 bg-opacity-50 mx-8"></div>
    </div>
  )
}

export default AboutMe;