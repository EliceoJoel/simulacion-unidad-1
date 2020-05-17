import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            nroTirosMoneda: 0,
            nroTirosDado: 0,
            cara: 0, escudo: 0,
            probCara: '0%', probEscudo:'0%',
            uno: 0, dos:0, tres:0, cuatro:0, cinco:0, seis:0,
            probUno: '0%', probDos:'0%', probTres:'0%', probCuatro:'0%', probCinco:'0%', probSeis:'0%',
            showMoneda:false,
            showDado:false,
        }

        this.onChange = this.onChange.bind(this)
        this.experimentoMoneda = this.experimentoMoneda.bind(this)
        this.experimentoDado =this.experimentoDado.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({showMoneda:false, showDado:false})
    }

    aleatorio(minimo, maximo){
      return Math.floor(Math.random() * ((maximo+1) - minimo) + minimo);
    }

    experimentoMoneda(e) {
        e.preventDefault()
        this.setState({showMoneda:true})
        console.log(this.aleatorio(1,2))

    }

    experimentoDado(e) {
      e.preventDefault()
      this.setState({showDado:true})
      console.log(this.aleatorio(1,5))
  }

    render() {
        return (
          <div>
            <div className="p-3 mb-2 bg-success text-white text-center h3">Proyecto de unidad 1 de simulación</div>
            <div className="container mt-5">
              <div className="row">
                <div className="col">
                  <form noValidate onSubmit={this.experimentoMoneda}>
                    <h4 className="text-center mb-4">Probabilidad de tirar moneda</h4>
                    <div className="form-group">
                      <label htmlFor="titulo">Numero de tiros</label>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-control" 
                        name="nroTirosMoneda"
                        value={this.state.nroTirosMoneda}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Realizar experimento</button>
                  </form>
                  {this.state.showMoneda?
                    <div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          Numero de caras : {this.state.cara}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probCara}
                        </div>
                        <div className="col-md-6">
                          Numero de escudos : {this.state.escudo}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probEscudo}
                        </div>
                      </div>
                      <div className="container mt-4">
                        <div className="row">
                          {/*mapeo aqui */}
                          <div className="col-md-1 border">1</div>
                        </div>
                      </div>
                    </div>
                  :null
                  }
                </div>
                <div className="col">
                  <form noValidate onSubmit={this.experimentoDado}>
                    <h4 className="text-center mb-4">Probabilidad de tirar dado</h4>
                    <div className="form-group">
                      <label htmlFor="titulo">Numero de tiros</label>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-control" 
                        name="nroTirosDado"
                        value={this.state.nroTirosDado}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Realizar experimento</button>
                  </form>
                  {this.state.showDado?
                    <div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          Cantidad de uno : {this.state.uno}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probUno}
                        </div>
                        <div className="col-md-6">
                          Cantidad de dos : {this.state.dos}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probDos}
                        </div>
                        <div className="col-md-6">
                          Cantidad de tres : {this.state.tres}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probTres}
                        </div>
                        <div className="col-md-6">
                          Cantidad de cuatro : {this.state.cuatro}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probCuatro}
                        </div>
                        <div className="col-md-6">
                          Cantidad de cinco : {this.state.cinco}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probCinco}
                        </div>
                        <div className="col-md-6">
                          Cantidad de seis : {this.state.seis}
                        </div>
                        <div className="col-md-6">
                          Probabilidad : {this.state.probSeis}
                        </div>
                      </div>
                      <div className="container mt-4">
                        <div className="row">
                          {/*mapeo aqui */}
                          <div className="col-md-1 border">1</div>
                        </div>
                      </div>
                    </div>
                  :null
                  }  
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Login

