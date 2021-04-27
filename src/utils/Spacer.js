const Spacer = props => {
  const { height } = props;
  return (
    <div className={`bg-transparent w-full h-${height}`}></div>
  )
}

export default Spacer;