import React, { Component } from 'react';
import './App.css';
import Product from "./Pros";
import Kons from './kons.js';
import Buttons from './ButtonFloats';
import './materialize/css/materialize.min.css';

// import '.materialize/css/materialize.css';
// import '.materialize/js/materialize.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
      products : [
        // {
        //   judul : 'Dalaman',
        //   harga : '1.000'
        // },
        // {
        //   judul : 'Luaran',
        //   harga : '10.000'
        // },
        // {
        //   judul : 'Sampingan',
        //   harga : '5.000'
        // },
        // {
        //   judul : 'Bawahan',
        //   harga : '15.000'
        // },
        
      ]
    }
  }

  componentDidMount(){
    let api_url = 'http://my-json-server.typicode.com/techtona/product_api2/products';
    fetch(api_url)
    .then(response => response.json())
    .then(data=> {
      this.setState({products : data});
    })
    .catch(function(e){
      console.log(e);
    })

    
  }

  hapusBaris = (key) => {
    this.state.products.splice(key,1);
    this.setState({products : this.state.products});
  }


  handleSubmit = (e) => {
    e.preventDefault();

    let judul=this.refs.judul.value;
    let harga=this.refs.harga.value;
    let id=this.refs.id.value;

    console.log(judul, harga, id);

  }

  render() {
    return (
      <div className="row">
        <div className="col m12">
            <form >
              
            </form>
        </div>

        
        <table>
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Harga Produk</th>
              <th>Pilihan</th>
            </tr>
          </thead>
          <tbody>
        {this.state.products.map((data, key) => {
          return (
            <tr key={data.id}>
              <td>{data.judul}</td>
              <td>{data.harga}</td>
              <td>
                <button onClick={()=>this.hapusBaris(key)} className="waves-effect waves-teal btn-small red">Hapus</button>
              </td>
            </tr>
          )
          })}
            </tbody>
          </table>
        
      </div>
    );
  }
}

export default App;
