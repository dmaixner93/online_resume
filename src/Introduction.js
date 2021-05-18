import Button from './Button';
import Spacer from './utils/Spacer';

const Introduction = () => {
  return (
    <div className="w-full text-gray-700 dark:text-gray-300 space-y-4 text-left">
      <h3 className="text-base tracking-wider font-medium text-blue-500 dark:text-blue-300 pl-1">Hi, my name is</h3>
      <h1 className="text-4xl text-gray-600 dark:text-gray-100 font-semibold">Daniel Maixner</h1>
      <p className="text-5xl">I design and build digital platforms.</p>
      <p className="leading-6 max-w-xl">
      Based in St. Louis, Missouri, I am a self-taught software engineer. I currently work at World Wide Technology as a software engineer, enhancing their internal applications that engineers work with everyday in the company.
      </p>
      <Spacer height={4} />
      <Button />
    </div>
  )
}

export default Introduction;