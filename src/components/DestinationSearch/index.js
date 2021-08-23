import './index.css'

const DestinationSearch = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="listitem">
      <img className="image" alt="destinationImage" src={imgUrl} />
      <h1 className="name">{name}</h1>
    </li>
  )
}

export default DestinationSearch
