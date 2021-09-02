import React from 'react';

const WordPage = props => {
    return (
        <div>
            {
                isNaN(props.wordId) ?
                    <h1
                        style={
                            props.textColor ?
                                { color: props.textColor, backgroundColor: props.backColor }
                                : null
                        }
                    >The Word is: {props.wordId}</h1>
                    : <h1
                    style={
                        props.textColor ?
                            { color: props.textColor, backgroundColor: props.backColor }
                            : null
                    }
                    >The number is: {props.wordId}</h1>
            }
        </div>
    )
}

export default WordPage;