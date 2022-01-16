import { Header } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <section className='flex-1 flex flex-col items-center text-center justify-center gap-4'>
            <Header title='404 - Page is Not Found' />
            <h3 className='text-2xl font-medium text-center'>Sorry you must be confused, but the page your looking for is not available!</h3>
            <Link to={'/'} className="btn btn-primary mt-4">
                Back to Home
            </Link>
        </section>
    )
}

export default Page404
