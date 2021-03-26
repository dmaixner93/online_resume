const Section = (props) => {
  return (
    <section className="w-full h-auto text-gray-200 min-h-screen flex items-center justify-center border border-blue-500">
      <div className="w-auto h-auto">
        {props.children}
      </div>
    </section>
  )
}

export default Section;