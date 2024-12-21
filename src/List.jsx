import React from 'react'

export const List = ({ getItems }) => {
    const items = getItems();
    return (
        <>
            {
                items.map(item =>
                    <p>{item}</p>
                )
            }
        </>
    )
}
