import Button from './Button';
import Spacer from './Spacer';

const Introduction = () => {
  return (
    <div className="w-full text-gray-700 dark:text-gray-300 space-y-4 text-left">
      <h2 className="text-base tracking-wider font-mono text-blue-400">Hi, my name is</h2>
      <h1 className="text-5xl text-gray-600 dark:text-gray-100 font-semibold">Daniel Maixner</h1>
      <p className="text-5xl">This is some bigger text about things</p>
      <p className="leading-6 max-w-xl">
      The 2021 FIA Formula One World Championship is a motor racing championship for Formula One cars which is the 72nd running of the Formula One World Championship.
      </p>
      <Spacer height={4} />
      <Button />
    </div>
  )
}

export default Introduction;