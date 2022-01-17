import React from 'react'
import PropTypes from 'prop-types'
const baseURL = 'http://localhost:3030'

const ScoopForm = ({ data }) => {
    return (
        <div>
            <h3 className='text-2xl font-medium'>Scoops</h3>
            <p>$2.00 each</p>
            <p>Scoops total: <span className='font-semibold'>$2.00</span></p>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    data.map(item => (
                        <div className='px-2 py-4 bg-white items-center shadow-sm card card-bordered card-compact border-primary card-side gap-4 w-full h-full' key={item.name}>
                            <img loading='lazy' src={baseURL+item.imagePath} alt={item.name + " scoop"} title={item.name} className={`shadow rounded-full w-32 h-32 bg-cover `} />
                            <div className='flex flex-col gap-2'>
                                <label className='label label-text'>{item.name}</label>
                                <input min={0} max={2} type={'number'} defaultValue={0} className="p-2 input-primary input-bordered input input-sm w-20" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

ScoopForm.defaultProps = {
    data: []
}

ScoopForm.propTypes = {
    data: PropTypes.array
}

export default ScoopForm
