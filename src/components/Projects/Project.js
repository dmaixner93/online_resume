import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

const Project = props => {
  const { image, orientation } = props;
  const align = {
    right: {
      position: 'right-0',
      flex: 'items-end',
      text: 'text-right',
      opposite: 'left-0'
    },
    left: {
      position: 'left-0',
      flex: 'items-start',
      text: 'text-left',
      opposite: 'right-0'
    },
  }  

  return (
    <div className="group relative z-0 flex h-96 w-full">
      <ImageColumn 
        align={align[orientation]}
        image={image} />
      <TextColumn 
        align={align[orientation]}
        {...props}
      />
    </div>
  )
}

export default Project;