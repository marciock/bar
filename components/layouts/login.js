import React from 'react'
import FabForm from '../buttons/fabForm'


class Login extends React.Component{
  
  

  render(){
    
      const centra={
        marginLeft:'30%'
      }
    return (
      <div className=' container  mt-5' style={centra}  >
      
        <div className="card col-sm-8" >
          <div className="card-header"> <h3>Login</h3></div>
          <form>
           <ul className="list-group list-group-flush">
                <li className="list-group-item">
                   <div className="form-group col">
                      <label for="user" >Usuário</label>
                      <input type="text" className="form-control" id="user"   />
                      <span  className="bmd-help" >Usuário icorreto ou inexistente.</ span>
                    </div>   
                </li>
                <li className="list-group-item">
                   
                    <div className="form-group col">
                          <label for="user">Senha</label>
                          <input type="password" className="form-control" id="password"   />
                          <span  className="bmd-help" >Senha incorreta. Tente novamente.</ span>
                       </div>   
                      
                </li>
                
            </ul>
           
            <div>
            <FabForm icon="done" url="/" />
            </div>
            </form>

        </div>
      </div>
    )
  }
}

export default Login