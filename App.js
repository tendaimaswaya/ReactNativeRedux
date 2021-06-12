
import React from 'react';
import AppView from './AppView'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
    <Provider store={store}>
      <AppView/>
    </Provider>
    )
  }
}
