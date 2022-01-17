import React from 'react'
import PropTypes from 'prop-types'
const baseURL = 'http://localhost:3030'

const ToppingForm = ({ data }) => {
    return (
        <div>
            <h3 className='text-2xl font-medium'>Toppings</h3>
            <p>$1.50 each</p>
            <p>Toppings total: <span className='font-semibold'>$3.00</span></p>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    data.map(item => (
                        <div className='px-2 py-4 bg-white items-center card-side shadow-sm card card-bordered card-compact border-primary gap-4 lg:card-normal w-full h-full' key={item.name}>
                            <img loading='lazy' title={item.name} src={baseURL+item.imagePath} alt={item.name + " topping"} className={`shadow rounded-full w-32 h-32 bg-cover`} />
                            <label className="cursor-pointer label flex items-center gap-2 flex-wrap">
                                <span className="label-text">{item.name}</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

ToppingForm.defaultProps = {
    data: []
}

ToppingForm.propTypes = {
    data: PropTypes.array
}

export default ToppingForm
