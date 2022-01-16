import React from 'react'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <main className='min-h-screen flex flex-col py-8 px-12 bg-base-100'>
            {children}
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

Layout.defaultProps = {
    children: React.createElement('div')
}

export default Layout
