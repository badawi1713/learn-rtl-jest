import { Header } from 'components'
import { flavorsData, toppingsData } from 'data'
import React from 'react'

const Summary = () => {
    return (
        <>
            <Header title="Design Your Sundae!" />
            <form className='my-8 grid grid-cols-1 gap-8'>
                <div>
                    <h3 className='text-2xl font-medium'>Scoops</h3>
                    <p>$2.00 each</p>
                    <p>Scoops total: <span className='font-semibold'>$2.00</span></p>
                    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            flavorsData.map(item => (
                                <div className='px-2 py-4 bg-white items-center shadow-sm card card-bordered card-compact border-primary card-side gap-4 w-full h-full' key={item.flavor}>
                                    <div title={item.flavor} className={`${item.color} shadow rounded-full w-32 h-32 `} />
                                    <div className='flex flex-col gap-2'>
                                        <label className='label label-text'>{item.flavor}</label>
                                        <input min={0} max={2} type={'number'} defaultValue={0} className="p-2 input-primary input-bordered input input-sm w-20" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-medium'>Toppings</h3>
                    <p>$1.50 each</p>
                    <p>Toppings total: <span className='font-semibold'>$3.00</span></p>
                    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            toppingsData.map(item => (
                                <div className='px-2 py-4 bg-white items-center card-side shadow-sm card card-bordered card-compact border-primary gap-4 lg:card-normal w-full h-full' key={item.name}>
                                    <img title={item.name} src={item.image} alt={item.image} className={`shadow rounded-full w-32 h-32 bg-contain`} />
                                    <label className="cursor-pointer label flex items-center gap-2 flex-wrap">
                                        <span className="label-text">{item.name}</span>
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl font-medium'>Grand total: $5.00</h2>
                    <button type='submit' className="btn btn-primary mt-4 w-full md:w-auto">Order Sundae</button>
                </div>
            </form>
        </>
    )
}

export default Summary
