import React, { useState } from 'react'
import Spinner from '../components/spinner'

const Demo = () => {
    const [loading, setLoading] = useState(false)
  return (
    <div>
        {loading && <Spinner/>}
        <button onClick={() => setLoading(true)}>Click me</button>
    </div>
  )
}

export default Demo