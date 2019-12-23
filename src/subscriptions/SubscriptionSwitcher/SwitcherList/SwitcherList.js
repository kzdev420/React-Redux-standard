import React, { Component } from 'react';
import { isEqual } from 'lodash';
import Link from 'common/Link';
import styles from '../index.module.css';

import configureAxios from 'configure/axios';
const axios = configureAxios();


class SwitcherList extends Component {

  constructor(props){
    super(props);
    var robj = {};
    var step = this.props.subs.map(sub => {
      robj[sub.id] = null;
      return robj
    })
    this.state = {
      detail : robj
    }
  }

  componentDidMount() {
    this.fetchData();
    this.fetchContract();
  }

  componentDidUpdate(oldProps) {
    if (this.props.userId !== oldProps.userId) {
      this.fetchData();
      this.fetchContract();
    }
  }

  fetchContract =  async ()=>{
    var robj = {};
    const step = await Promise.all(this.props.subs.map(async sub =>{
      let response = await axios.get('insurance/contracts', { params: { subscription : sub.id } });
      response = await response.data.results[0];
      robj[sub.id] = null;
      if(response) robj[sub.id] = true;
      return robj;
    }));
    this.setState( {
      detail : robj
    });
    console.log("fetch",this.state.detail,robj)
  }
  fetchData() {
    const { fetchSubs, userId } = this.props;
    fetchSubs(userId);
  }

  render() {
    const { active, subs, route } = this.props;    
    if (!subs || subs.length === 0) { return null; }   
    console.log(this.state.detail)
    
    return subs.map(sub => {
      if (isEqual(sub, active)) { return null; }
      if(this.state.detail[sub.id]) {return null;}
      console.log("render", this.state.detail[sub.id])
      return (
        <Link key={sub.id} className={styles.listItem} to={route(sub.id)}>
          <div className={styles.avi}>
            {sub.first_name[0]}
            {sub.last_name[0]}
          </div>
          {sub.first_name} {sub.last_name}
        </Link>
      );
    });
  }
}


export default SwitcherList;

