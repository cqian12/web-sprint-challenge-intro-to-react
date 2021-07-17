// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div` //styling for characters created by the Character component
    display:flex; 
    flex-wrap: wrap;
    justify-content: center;
    color: azure;
`

const Character = props => {
    const { character } = props //characters are props passed down from App

    return ( //returns a character with the styling above, listing key details in an unordered list
        <StyledChar> 
            <h1 className = 'charName'>{character.name}</h1>
            <ul className = 'charDetails'>
                <li>Born: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height}cm</li>
            </ul>
        </StyledChar>
    )
}

export default Character //styled characters are exported to the parent component, App