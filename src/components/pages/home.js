import React, { Component } from 'react';
import { Button } from 'element-react';
import api from '../../api'

class Manage extends Component {
  click() {
    api.getAllWorkShop().then(res => {
      if(res.data.success) {
        
      } else {

      }
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="home">
        首页<i className="fa fa-circle"></i>
        <Button type="primary" onClick={this.click.bind(this)}>Hello</Button>
      </div>
    );
  }
}

export default Manage;
