import React, { useEffect } from 'react'


import { List } from '../../components/profilesCRUD/List'



const Main = () => {

  

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