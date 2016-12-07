import React from 'react'
import './App.css'
import {connect} from 'cerebral/react'

export default connect({
  title: 'title'
},
  function App (props) {
    return (
      <div className='o-container o-container--medium'>
        <h1>{props.title}</h1>
      </div>
    )
  }
)
