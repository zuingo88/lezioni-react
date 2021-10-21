import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ErrorPage = ({ location }) => {

  const history = useHistory();

  useEffect(() => {
    const timer =
      setTimeout(() => {
        history.push('/');
      }, 5000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <div>
      <h1>
        Error!!!
      </h1>
      <h4>404 Pagina non trovata</h4>
    </div>
  )
}

export default ErrorPage
