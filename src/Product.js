import React, {Component} from 'react';
import logo from './logo.svg'
import './App.css'

class Product extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="col m3">
                <div className="card teal darken-2">
                    <div className="card-image white-text">
                        <img src={logo} className="img-responsive"/>
                    </div>
                    <div className="card-content white-text">
                        <h3 className="card-title"><strong>{this.props.judul}</strong></h3>
                        <h4>Rp. {this.props.harga}</h4>
                    </div>
                    <div className="card-action">
                    <a class="btn-floating btn-large pulse #d50000 red accent-4" onClick={this.props.deleteCard} id={this.props.id} href="#"><i class="material-icons">delete</i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;