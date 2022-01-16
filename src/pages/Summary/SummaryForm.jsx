import React, { useState } from 'react'

const SummaryForm = () => {
    const [termsChecked, setTermsChecked] = useState(false)
    return (
        <form >
            <label className="cursor-pointer label justify-start flex items-center gap-2">
                <input type="checkbox" onChange={e => setTermsChecked(e.target.checked)} className="checkbox checkbox-primary" />
                <span className="label-text">I agree to <span className='font-semibold' title='You will not the ice cream obviously!'>Terms and Conditions</span> </span>
            </label>
            <button disabled={!termsChecked} type='submit' className="btn mt-2 btn-primary w-full md:w-auto">Confirm Order</button>
        </form>
    )
}

export default SummaryForm
