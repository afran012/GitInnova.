import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { listarPeliculaAsincrono } from '../../action/actionMovies'
import GitProfile from '../../components/GitProfile/GitProfile'


const Main = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(listarPeliculaAsincrono())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='main-Section'>
      <GitProfile>

      </GitProfile>

    </div>
  )
}

export default Main