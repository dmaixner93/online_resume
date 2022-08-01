import Button from '../../components/Button';
import Spacer from '../../components/Spacer';

const Introduction = () => {
  return (
    <div className="w-full text-gray-700 dark:text-gray-300 space-y-4 text-left">
      <h3 className="text-base font-medium text-blue-500 dark:text-blue-300 pl-1">Hi, my name is</h3>
      <h1 className="text-4xl text-gray-600 dark:text-gray-100 font-semibold">Daniel Maixner</h1>
      <p className="text-5xl">I design and build digital platforms.</p>
      <p className="leading-6 max-w-xl">
        I am a self-taught software engineer and automotive enthusiast. I currently work at World Wide Technology as a software developer for the Advanced Technology Center.
      </p>
      <Spacer height={4} />
      <Button />
    </div>
  )
}

export default Introduction;