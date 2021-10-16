import React, { Component } from 'react'

export class Test extends Component {
 render() {
  return (
   <div>
    <form action="/api/token/create" method="post">
     <input type="text" name="_token" />
     <input type="text" name="username" />
     <input type="password" name="password" />
     <button type="submit">Submit</button>
    </form>
   </div>
  )
 }
}

export default Test
