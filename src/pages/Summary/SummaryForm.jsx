import React from 'react'

const SummaryForm = () => {
    return (
        <form >
            <label className="cursor-pointer label justify-start flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">I agree to <span className='font-semibold'>Terms and Conditions</span> </span>
            </label>
            <button type='submit' className="btn mt-2 btn-primary w-full md:w-auto">Confirm Order</button>
        </form>
    )
}

export default SummaryForm
