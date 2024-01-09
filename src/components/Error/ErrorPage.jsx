import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error__page__main'>
        <div className="error__404">
            <b>404</b>, this page does not exist
        </div>
        <div className="error__link__home">Here is a link to our <Link to="/" className='error__home'><b>home page...</b></Link></div>
    </div>
  )
}

export default ErrorPage