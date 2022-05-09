import React from 'react'

export default function HelloTailwind( { message } ) {
  return (
    <h1 className="text-3xl font-bold underline">
      {message}
    </h1>
  )
}
