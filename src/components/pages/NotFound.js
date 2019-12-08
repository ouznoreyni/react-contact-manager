import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4"> <span className="text-danger">404</span> Page not found</h1>
      <p className="lead"> Sorry, that page does not found. <Link to="/" className="nav-link"> 👈 Go back to the home</Link></p>
    </div>
  )
}
