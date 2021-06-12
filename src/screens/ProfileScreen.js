import React from 'react'
import {
    SafeAreaView,
    ActivityIndicator,
    Image,
    View,
    Button,
    Text, 
    Alert} from 'react-native';
import { connect } from 'react-redux';
import * as profileActions from '../redux/actions/profileActions'


class ProfileScreen extends React.Component{
    constructor(props){
        super(props)
        this.props.fetchProfile()
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                  {this.props.isLoading ? <ActivityIndicator/> : <View/>}
             <View style={{alignItems:'center'}}>
             <Image
                    style={{flexDirection:'column',height:100, width:100, marginTop:15, resizeMode: "cover", alignContent:'center', justifyContent:'center', alignItems:'center'}}
                    source={{uri:'https://lh3.googleusercontent.com/proxy/togaxUQfhQKePgm-DtK2o7AP0Z2B3JuCJC00egS6eNugTrSnn2Pk9_VPYVn3LhN5d2WuoLjGyfodphb1OjQrSt4XYusZmcYBuZnSjkpuxyzRNqI'}}/>
                <Text>{this.props.profile.name}</Text>
                <Text>{this.props.profile.email}</Text>
                <Text>{this.props.profile.phone}</Text>
            </View>
            <Button  color="#841584" title="Logout" onPress={() =>  this.props.resetProfile()} />
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state){
    return {
      profile : state.profileReducer.profile,
      isLoading: state.profileReducer.isLoading,
      error: state.profileReducer.error
    }
  }
  
function mapDispatchToProps(dispatch){
    return{
      fetchProfile: () => dispatch(profileActions.fetchProfile()),
      resetProfile: () => dispatch(profileActions.resetProfile())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

