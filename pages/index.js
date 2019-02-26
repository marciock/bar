import React from 'react'

import Layout from '../components/layouts/layout'
import Login from '../components/layouts/login'


class Home extends React.Component{
  
  render(){

    const teste='<'+this.props.users+'/>';
      return (
        
        <div>
         
          <Layout>
             <Login />
          </Layout>
             
           
            
            
           
        </div>
      )
  }
}
export default Home
