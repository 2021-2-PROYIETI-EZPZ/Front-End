import React from 'react';

import axios from 'axios';
export default class data extends React.Component {
    state = {
      items: []
    }
  
    componentDidMount() {
      axios.get(`https://ezbrowser.herokuapp.com/ezpz/v1/crawler/asus`)
        .then(res => {
          const items = res.data;
          console.log(items);
          this.setState({ items });
        })
    }
  
    render() {
      return (
        this.state.items
      )
    }
  }