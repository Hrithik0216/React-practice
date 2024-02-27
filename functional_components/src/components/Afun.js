import React, { useState } from 'react'
import Bfun from './Bfun'

const Afun = (props) => {
    const [age, setAge] = useState(25)
    // setAge(55)
    const [mail, setMail] = useState("hk@gmailcom")
    return (
        <div>
            A : {props.name}
            <Bfun {...props} age={age} />
          
        </div>
    )
}

export default Afun