import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import GitProfile from '../../components/GitProfile/GitProfile'
import { List } from '../../components/profilesCRUD/List'
import { PerfilesCRUD } from '../../components/profilesCRUD/PerfilesCRUD'


const Main = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='main-Section'>

      <List/>
    </div>
  )
}

export default Main