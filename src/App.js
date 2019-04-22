import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";
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
        {
          judul : 'Dalaman',
          harga : '1.000'
        },
        {
          judul : 'Luaran',
          harga : '10.000'
        },
        {
          judul : 'Sampingan',
          harga : '5.000'
        },
        {
          judul : 'Bawahan',
          harga : '15.000'
        },
        
        
      ]
    }
  }

  hapusCard = (key) => {
    this.state.delete_clicked = !this.state.delete_clicked;
    this.setState({delete_clicked : this.state.delete_clicked});
    this.state.products.splice(key.target.id,1);
    this.setState({products : this.state.products});
  }

  // componentDidMount(){
  //   let api_url = 'http://my-json-server.typicode.com/techtona/product_api2/products';
  //   fetch(api_url)
  //   .then(response => response.json())
  //   .then(data=> {
  //     this.setState({products : data});
  //   })
  //   .catch(function(e){
  //     console.log(e);
  //   })

    
  // }

  hapusBaris = (key) => {
    this.state.products.splice(key,1);
    this.setState({products : this.state.products});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let id=this.refs.id.value;
    let judul=this.refs.judul.value;
    let harga=this.refs.harga.value;
    

    // console.log(judul, harga, id);
    this.state.products.push({id,judul,harga});
        this.setState({products: this.state.products});

        this.refs.form.reset();

  }

  
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return (
      <div className="row">
        <div className="col m3">
        <form ref="form" onSubmit={this.handleSubmit}>
            <input type="text" id="id" placeholder="ID Product"></input>
            <input type="text" id="nama" placeholder="Nama Product"></input>
            <input type="text" id="harga" placeholder="Harga"></input>
            <button type="submit" className="waves-effect waves-light btn">Submit</button>
          </form>
        </div>

        
        {/* <table>
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
          </table> */}


          <div className="col m9">
          {this.state.products.map((data, key) => {
          return (
          <Product deleteCard={this.hapusCard} harga={data.harga} judul={data.judul} key={key} id={key}/>
          )
          })}
          </div>
                    
 
        
            
        
      </div>
    );
  }
}

export default App;
