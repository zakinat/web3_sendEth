import React from 'react'

const Input = ({placeholder,value, name,type,handleChange}) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            step='0.0001'
            value={value}
            onChange={(e)=>handleChange(e,name)}
            className='my-2 w-full rounded-sm p-2 outline-none bg-trasparent text-white border-none text-sm white-glassmorphism'
        />
    )
}

export default Input
