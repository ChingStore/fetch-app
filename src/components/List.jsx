import React, { Component} from 'react';
import Item from './Item';
import axios from 'axios';



class List extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  // createEntries() {
  //   let entry = axios
  //     .get("/itemDetails?itemId=RHfVDGM5L2BKPaIwGOXA")
  //     .then((res) => {
  //       let qty = null;
  //       let item = null;
  //       console.log(res);
  //       qty = res.data.items.soldCount;
  //       item = res.data.items.name;
  //       return <Item qty={qty} item={item}/>;
  //     })
  //   return entry
  // }
  //
  // render() {
  //   const listItems = this.createEntries()
  //   return <ul className="List">{listItems}</ul>
  // }

  componentDidMount() {
    this.renderOrders();
    this.renderItems();
  }

  renderOrders = async() => {
    try {
      let res = await axios.get("/orderDetails?orderId=fYgtD9PzPK3AyV7DEQbq");
      console.log("Orders",res)
      let items = res.data.items;

      // return  items.map((item, i) => {
      //   return (
      //     <li key={i} className="list-group-item">{item.text}</li>
      //   );
      // });
      this.setState({
        Items: items.map((item, i) => {
          return (
            <li key={i} className="list-group-item">{item.id}</li>
          );
        })
      });
    } catch (err) {
      console.log(err);
    }
  }

  renderItems = async() => {
    try {
      let res = await axios.get("/itemDetails?itemId=RHfVDGM5L2BKPaIwGOXA");
      console.log("items", res)
      let qty = res.data.items.soldCount;
      let item = res.data.items.name;

      // this will re render the view with new data
      this.setState({
        Items: <Item qty={qty} item={item}/>
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.state.Orders}
          {this.state.Items}
        </ul>
      </div>
    );
  }
}

export default List;
