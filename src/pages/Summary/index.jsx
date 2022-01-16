import { Header } from 'components'
import React from 'react'

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
                <form >
                    <label className="cursor-pointer label justify-start flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="label-text">I agree to <span>Terms and Conditions</span> </span>
                    </label>
                    <button type='submit' className="btn mt-2 btn-primary w-full md:w-auto">Confirm Order</button>
                </form>
            </section>
        </>
    )
}

export default Summary
