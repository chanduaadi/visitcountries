import './index.css'

const CountriesList = props => {
  const {eachList, onAddVisited} = props
  const {id, name, isVisited} = eachList

  const visited = () => {
    onAddVisited(id)
  }

  return (
    <li className="list-item-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="visit-button" type="button" onClick={visited}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
