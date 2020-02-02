import React, { Component} from 'react';
import Item from './Item';
import axios from 'axios';

let orderId = "fYgtD9PzPK3AyV7DEQbq";

class List extends Component{
  constructor(){
    super()
    this.state = {
      Order: null,
      Items: [],
      Children: []
    }
  }

  componentDidMount() {
    this.renderOrders();
    // this.renderItems();
  }

  renderItems = async(items) => {
    try {
      let children = items.map((item, i) => {
          return <Item key={i} qty={item.quantity} item={item.id} price={item.price}/>
      })
      this.setState({
        Children: children
      })
    } catch (err) {
      console.log(err)
    }
  }

  renderOrders = async() => {
    try {
      let res = await axios.get("/orderDetails?orderId=" + orderId);
      console.log("Orders",res)
      let items = res.data.items;

      this.setState({
        Items: items
      })

      this.renderItems(this.state.Items)

    } catch (err) {
      console.log(err);
    }
  }

  // renderItems = async() => {
  //   try {
  //     let res = await axios.get("/itemDetails?itemId=" + itemId);
  //     console.log("items", res)
  //     let qty = res.data.items.soldCount;
  //     let item = res.data.items.name;
  //
  //     // this will re render the view with new data
  //     this.setState({
  //       Items: <Item qty={qty} item={item}/>
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.state.Children}
          {/*this.state.Items*/}
        </ul>
      </div>
    );
  }
}

export default List;
