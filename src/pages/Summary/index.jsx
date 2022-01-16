import { Header } from 'components'
import React from 'react'
import SummaryForm from './SummaryForm'

const Summary = () => {
    return (
        <>
            <Header title="Order Summary" />
            <section className='flex flex-col gap-8 my-8'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-2xl font-medium'>Scoops: $2.00</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>1 Mint</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-2xl font-medium'>Toppings: $3.00</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>Gummi Bears</li>
                        <li>Chocolate Chips</li>
                    </ul>
                </div>
                <h3 className='text-2xl font-medium'>Total $5.00</h3>

                <h3 className='text-2xl font-medium'>Toppings: $3.00</h3>
                <SummaryForm />
            </section>
        </>
    )
}

export default Summary
