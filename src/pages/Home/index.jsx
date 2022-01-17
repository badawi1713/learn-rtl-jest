import axios from 'axios'
import { Header } from 'components'
import React, { useEffect, useState } from 'react'
import ScoopForm from './ScoopForm'
import ToppingForm from './ToppingForm'

const baseURL = 'http://localhost:3030'

const Home = () => {

    const [scoops, setScoops] = useState([])
    const [toppings, setToppings] = useState([])

    useEffect(() => {
        const getScoops = async () => {
            try {
                const response = await axios.get(`${baseURL}/scoops`)
                setScoops(response.data)
            } catch (error) {
                // TODO: handle error response
                console.log(error)
            }
        }

        const getToppings = async () => {
            try {
                const response = await axios.get(`${baseURL}/toppings`)
                setToppings(response.data)
            } catch (error) {
                // TODO: handle error response
                console.log(error)
            }
        }

        getToppings()
        getScoops()
    }, [])

    return (
        <>
            <Header title="Design Your Sundae!" />
            <form className='my-8 grid grid-cols-1 gap-8'>
                <ScoopForm data={scoops} />
                <ToppingForm data={toppings} />
                <div>
                    <h2 className='text-4xl font-medium'>Grand total: $5.00</h2>
                    <button type='submit' className="btn btn-primary mt-4 w-full md:w-auto">Order Sundae</button>
                </div>
            </form>
        </>
    )
}


export default Home
