import './index.css'

const VisitedList = props => {
  const {eachItem, onRemoveVisited} = props
  const {id, name, imageUrl} = eachItem

  const removeVisited = () => {
    onRemoveVisited(id)
  }

  return (
    <li className="visited-list-container">
      <img className="visited-img" src={imageUrl} alt="thumbnail" />
      <div className="visited-card-info-container">
        <p className="visited-country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={removeVisited}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedList
