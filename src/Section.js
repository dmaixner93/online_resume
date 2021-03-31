const Section = (props) => {
  return (
    <section className="w-full h-auto text-gray-200 min-h-screen flex items-center justify-center border border-gray-100 border-opacity-10">
      <div className="max-w-4xl w-full h-auto">
        {props.children}
      </div>
    </section>
  )
}

export default Section;