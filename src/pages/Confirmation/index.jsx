import { Header } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'

const Summary = () => {
    return (
        <section className='flex-1 flex flex-col items-center justify-center gap-4'>
            <Header title='Thank You!' />
            <h3 className='text-2xl font-medium'>Your order number is 15523911</h3>
            <p className='text-sm'>*as per our terms and conditions, nothing will happen now.</p>
            <Link to='/' className="btn btn-primary mt-4">Create New Order</Link>
        </section>
    )
}

export default Summary
