import Button from '../../components/Button';
import Spacer from '../../components/Spacer';

const Introduction = () => {
  return (
    <div className="w-full text-gray-700 dark:text-gray-300 space-y-2 lg:space-y-4 text-center md:text-left">
      <h3 className="text-lg font-medium text-blue-500 dark:text-blue-300 lg:pl-1">Hi, my name is</h3>
      <h1 className="text-5xl text-gray-600 dark:text-gray-100 font-semibold">Daniel Maixner</h1>
      <p className="leading-6 block mx-auto md:mx-0 max-w-xl">
        I am a self-taught software engineer and automotive enthusiast.
      </p>
      <Spacer height={4} />
      <Button />
    </div>
  )
}

export default Introduction;