import React, { Component } from 'react';


class App extends Component {

  constructor(){
    super();
    this.state = {
      nome: "",
      sexo: "",
    }

    this.onChange = (evento) => {
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value;
      this.setState(state);
     }

    this.onSubmit= (e) => {
      e.preventDefault();

      console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        Nome:<input name="nome" type="text" value={this.state.nome} onChange={this.onChange}/>
        <br />
        Sexo: Masculino<input type="radio" name="sexo" value="masculino" onChange={this.onChange} checked={this.state.sexo==="masculino"} />
              Feminino<input type="radio" name="sexo" value="feminino" onChange={this.onChange} checked={this.state.sexo==="feminino"} />

        <br />
        Escola: 
          <select name="escola" onChange={this.onChange}>
            <option value="">Selecione</option>
            <option value="1">Colégio Academia</option>
            <option value="2">Santa Catarina</option>
          </select>
          <br />
          <button onClick={this.onSubmit}>Enviar</button>
      </div>
    );
  }
}

export default App;
