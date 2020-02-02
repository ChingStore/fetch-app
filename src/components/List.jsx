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
          return <Item key={i} qty={item.quantity} item={item.name} price={item.price}/>
      })
      this.setState({
        Children: children
      })
    } catch (err) {
      console.log(err)
    }
  }

  setItems = async(items) => {
    let newItems = await items.forEach(async item=>{
      let response = await axios.get("/itemDetails?itemId=" + item.id)
      console.log("name",response.data.items.name)
      console.log("item=", {...item, name: response.data.items.name})
      return ({...item, name: response.data.items.name})
    })
    console.log("newItems", await newItems)
    return newItems

    // this.setState({
    //   Items: newItems
    // })
    // this.renderItems(this.state.Items)
    // return new Promise(newItems)
  }

  renderOrders = async() => {
    try {
      let res = await axios.get("/orderDetails?orderId=" + orderId);
      console.log("Orders",res)
      let items = res.data.items;
      console.log("items=", items)

      let newItems = await this.setItems(items)
      // console.log("new items", newItems)

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
