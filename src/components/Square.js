import React from 'react'


const Square = ({ value, onClick }) => {
    return (
        <React.Fragment>
            <button
                className="square"
                onClick={() => onClick()}
            >
                {value}
            </button>
        </React.Fragment>
    )
}

export default Square
