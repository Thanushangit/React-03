import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err=useRouteError()
  return (
    <div>
        <h3>oops! an error occured</h3>
        <p>{err.message}</p>
    </div>
  )
}

export default ErrorPage