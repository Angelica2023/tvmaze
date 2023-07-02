import { useState, useEffect } from 'react'
import ImagenTv from './componentes/ImagenTv'
import SearchBar from './componentes/SearchBar'
import './App.css'

function App () {
  const [series, setSeries] = useState([])
  const EnvioBusqueda = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setSeries(results)
        return results.json
      }).catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=girls')
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setSeries(results)
        return results.json
      }).catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='App'>
      <SearchBar handleSearch={EnvioBusqueda} />
      <div className='grid-cards'>
        {series.map((serie) => (
          <ImagenTv
            key={serie.show.id}
            src={serie.show.image?.original}
            name={serie.show.name}
          />
        ))}
      </div>
    </div>

  )
}
export default App
