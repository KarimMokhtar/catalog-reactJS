import React, { Component } from "react";

export default class Category extends Component {
    constructor(props) {
        super();
        this.state = { categories: [] };
    }
    componentDidMount() {
        fetch(this.props.categoryAPI)
            .then(res => res.json())
            .then(
                res => this.setState({ categories: res })
            );
    }
    render() {
        return <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
            {this.state.categories.map((cat,i)=>
                <div key={i} className="col-md-2" onClick={()=>this.props.choseCategory(cat.id,cat.name)} style={{cursor:"pointer"}}>
                    <img className="img-fluid" src={cat.image} alt={cat.name} />
                    <div className="carousel-caption">
                        <h3>{cat.name}</h3>
                    </div>
                </div>
            )}
            </div>
        </div>;
    }
}
