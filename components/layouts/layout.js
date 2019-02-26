import React from 'react'
import Head from './head'
import Nav from './nav'
import Foot from './foot'

class Layout extends React.Component{
  render(){
    return (
      <div>
        <Head>

        </Head>
        <Nav />
      
          {this.props.children}
   
        <Foot />
      </div>
    )
  }
}

export default Layout