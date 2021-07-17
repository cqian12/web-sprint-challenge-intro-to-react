// Write your Character component here
import React from 'react'


const Character = props => {
    const { name } = props

    return (
        <div className = 'charSumm'>
            <h1 className = 'charName'>{name}</h1>
        </div>
    )
}

export default Character