import React from 'react'
import './/CSS/Left.css'
import { Link, Routes, Route, Switch } from 'react-router-dom'
import Contact1 from './Contact/Contact1'
import Contact3 from './Contact/Contact3'
import Contact2 from './Contact/Contact2'
import Nav from './nav';

const Contact = () => {
  return (
    <>
      <div className="split left">
        <div className="centered">
          <ul>
            <li><Link to='/contact/contact1'>Contact 1</Link></li>
            <li><Link to='/contact/contact2'>Contact 2</Link></li>
            <li><Link to='/contact/contact3'>Contact 3</Link></li>
          </ul>
        </div>
      </div>
      <>
        <Routes>
          <NavRoute path='/contact' element={<Contact1 />} />
          <Route path='/contact/contact3' element={<Contact3 />} />
          <Route path='/contact/contact2' element={<Contact2 />} />
        </Routes>

      </>

    </>
  )
}

export default Contact
