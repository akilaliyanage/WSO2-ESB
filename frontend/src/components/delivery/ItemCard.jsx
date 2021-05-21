import React, { Component } from 'react';
import { Card , Descriptions} from 'antd';

const { Meta } = Card;

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          cart:''
         }
    }

    componentDidMount(){
      this.setState({cart:window.localStorage.getItem('total')})
    }
    render() { 
        return ( 
            <div>
                <Descriptions title="Item Preview"></Descriptions>
                <Card
            hoverable
            style={{ width: "80%" }}
            cover={<img alt="example" src="https://media.istockphoto.com/vectors/shopping-cart-icon-design-cart-icon-symbol-design-vector-id1138644570?k=6&m=1138644570&s=612x612&w=0&h=YDQ1_rwiomJT9R6aGSX3mus0lXcRxGfrlbzLM6vV9eU=" />}
          >
            <Meta title={this.state.cart} description="" />
          </Card>
            </div>
         );
    }
}
 
export default ItemCard;