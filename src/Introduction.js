const Introduction = () => {
  return (
    <div className="w-full text-gray-400 space-y-4 text-left">
      <h2 className="text-base tracking-wider font-mono text-blue-400">Hi, my name is</h2>
      <h1 className="text-5xl text-gray-300 font-semibold">Daniel Maixner</h1>
      <p className="text-5xl">This is some bigger text about things</p>
      <p className="leading-6 max-w-xl">
      The 2021 FIA Formula One World Championship is a motor racing championship for Formula One cars which is the 72nd running of the Formula One World Championship.
      </p>
      <button
        onClick={e => e.preventDefault()}
        className="px-6 py-3 text-base text-blue-400 bg-transparent border border-blue-400 rounded hover:bg-blue-400 hover:bg-opacity-10">
        View Resume
      </button>
    </div>
  )
}

export default Introduction;