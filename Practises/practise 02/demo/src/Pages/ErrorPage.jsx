import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error =useRouteError();
  return (
    <div>
        <h3>Something wrong OOPS!...</h3>
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorPage