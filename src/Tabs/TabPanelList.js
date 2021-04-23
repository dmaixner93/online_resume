import Spacer from '../Spacer';

const TabPanelList = (props) => {
  const { responsibilities } = props.body;
  const lineItems = responsibilities.map(item => {
    return <li className="leading-7">{item}</li>
  })
  return (
    <div>
      <Spacer height={2} />
      <ul className="ml-2">
        {lineItems}
      </ul>
    </div>
  )
}

export default TabPanelList;