import React, {useState} from 'react'
import { useParams } from 'react-router'
import { productsdata } from './data'

const Productdetails = () => {
    const { id } = useParams()
    const data = productsdata.filter((product) => {
        return product.id == id
    })

    const [targetData, setTargetData] = useState(data[0]);

    console.log(targetData)
  return (
    <div>Productdetails</div>
  )
}

export default Productdetails