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
        <a href="weixin://">打开微信</a>
        <a href="youku://">打开优酷</a>
        <a href="alipays://">打败支付宝</a>
        <a href="baidumap://map/direction?origin=中关村&destination=五道口&mode=driving&region=北京">打开百度地图</a>
        <a href="mailto:yjt15851481743@outlook.com">测试发送邮</a>
      </div>
    );
  }
}

export default Manage;
