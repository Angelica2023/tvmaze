import { useState, useEffect } from 'react'
import './App.css'
import imagenTv from './componentes/imagenTv'

function App () {
  // const [gifs, setGifs] = useState([]) // lista de las serie
  const useApiData = (tvMazeData)=>{}
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1')
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setApiData(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      <div className='App'>
        <div className='grid-cards'>
          {
            apiData.map ((tvMazaRecord)=> (
            {tvMazaRecord.character.name}

))} 
)
}           
{/* //gifs.map(gif => ( */}
             {/* // <imagenTv */}
                // key={gif.id}
                // url={gif.image.medium}
                // title={gif.name}
              // />
{/*  */}
            {/* )) */}
{/* } */}
        {/* </div> */}
      {/* </div> */}
    {/* </> */}
  // )
// }
// 
export default App
