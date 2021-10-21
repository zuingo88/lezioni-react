import React from 'react'
import { Link } from "react-router-dom"

const Progetti = () => {
  return (
    <div>
      <div>
        <h2>Progetti</h2>
      </div>
      <div>
        <ul className='px-5'>
          <li className='button my-3 shadow'>
            <Link to="progetto/1" className=''>Progetto 1</Link>
          </li>
          <li className='button my-3 shadow'>
            <Link to="progetto/2" className=''>Progetto 2</Link>
          </li>
          <li className='button my-3 shadow'>
            <Link to="progetto/3" className=''>Progetto 3</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Progetti
