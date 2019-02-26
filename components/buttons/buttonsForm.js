import React from 'react'

class ButtonForm extends React.Component{
  render(){
    return (
      <div className="row float-left">
            <div className="form-group col">
                 <button type="submit" className="btn btn-raised btn-success">Salvar</button>
            </div>
            <div className="form-group col">
              <a href={this.props.cancelar}>
                 <button type="button" className="btn btn-raised btn-danger" id="cancelar" >Cancelar</button>
              </a>
            </div>
          </div>
    )
  }
}

export default ButtonForm