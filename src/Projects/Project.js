const Project = props => {
  const { image, text } = props;
  return (
    <div className="relative dev-border h-96 w-full">
      {image}
      {text}
    </div>
  )
}

export default Project;