import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Country from './components/Country/Country';
import {fetchData} from './api';

import styles from './ App.module.css';



class App extends React.Component{


  state={
    data:{},

  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({data:fetchData})
    console.log(data);
  }
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <Charts />
        <Country />

      </div>
    )
  }

}
export default App;
