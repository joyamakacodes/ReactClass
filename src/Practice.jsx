import React from 'react'
import { CallContext } from './Context'
import { connect } from 'react-redux'

const Practice = ({count}) => {
    const {user, email} = CallContext()
  return (
    <div>
      <h1>This is {user}</h1>
      <h2>An otp has been sent to this {email}</h2>
      <h3>{count}</h3>

    </div>
  )
}

 const mapStatetoProps=(state)=>({
  count: state.count
 })

 export default connect(mapStatetoProps)(Practice)
