import React from 'react'
import { SpinnerDotted } from 'spinners-react'

export default function Loading() {
  return (
    <div className="text-center " style={{marginTop:'40vh'}}>
    <SpinnerDotted
      size={190}
      thickness={180}
      speed={180}
      color="#5c0431"
    />
  </div>
  )
}
