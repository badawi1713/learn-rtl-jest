import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <h1 className='text-5xl text-primary font-bold'>{title}</h1>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Page Title"
}

export default Header
