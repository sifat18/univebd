import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Read({ children }) {
    const [show, setshow] = useState(false)
    const readMoreLess = () => {
        console.log(show);
        setshow(!show)
    }
    return (
        <>
        {/* info display more or less  */}
            {show ? children : children.slice(0, 170) + '.....'}
            <Button variant='btn btn-outline-primary  my-3 d-block' onClick={readMoreLess}>{show ? 'Read Less' : 'Read More'}</Button>
        </>
    )
}
