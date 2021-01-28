import React from 'react'

export default function User(props) {
  const { details } = props
  return (
    <div>
      <h1>{details.name}</h1>
      <h1>{details.email}</h1>
      <h1>{details.password}</h1>
    </div>
  )
}

