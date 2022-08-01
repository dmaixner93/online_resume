import ImageColumn from './ImageColumn';
import TextColumn from '../TextColumn';

const Project = props => {
  const { name, orientation } = props;
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
    <div className="group relative z-0 flex h-96 w-full cursor-pointer">
      <ImageColumn 
        align={align[orientation]}
        name={name} />
      <TextColumn 
        align={align[orientation]}
        {...props}
      />
    </div>
  )
}

export default Project;