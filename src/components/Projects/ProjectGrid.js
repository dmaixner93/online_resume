import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const tileData = [
  { id: 0, },
  { id: 1, },
  { id: 2, },
  { id: 3, },
  { id: 4, },
  { id: 5, },
]

const ProjectGrid = (props) => {
  return (
    <GridList spacing={16} cols={3} cellHeight={180}>
      {tileData.map(tile => (
        <GridListTile key={`glt-${tile.id}`}>
          <div className="w-full h-full bg-blue-500"></div>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ProjectGrid;