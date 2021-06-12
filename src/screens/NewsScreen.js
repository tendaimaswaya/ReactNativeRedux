import React from 'react'
import {
    SafeAreaView,
    ActivityIndicator,
    Image,
    View,
    Button,
    Text,
    FlatList, 
    TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as newsActions from '../redux/actions/newsActions'

class NewsScreen extends React.Component{
    constructor(props){
        super(props)
        this.props.loadNews()
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                 
            <Button  backgroundColor="#841584" style={{ width: 40, flex:0 }} title="Refresh" onPress={() => {}} />
             {this.props.isLoading ? <ActivityIndicator style={{flex:1, flexGrow:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}/> : 
            <FlatList
                style={{marginStart:10, marginEnd:10}}
                keyExtractor = {(item) => item.url }
                data = {this.props.news.articles}
                contentContainerStyle={{  marginTop:0 }}
                renderItem={ ({item}) => (
                <TouchableOpacity>
                <View>
                    <Image
                        style={{height:180, width:370, marginTop:15, resizeMode: "cover",}}
                        source={{uri:item.urlToImage}}/>
                    <Text>{item.title}</Text>
                    <Text>- {item.source.name}</Text>
                </View>
                </TouchableOpacity>
            )}/>
    }
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state){
    return {
      news : state.newsReducer.news,
      isLoading: state.newsReducer.isLoading,
      error: state.newsReducer.error
    }
  }
  
function mapDispatchToProps(dispatch){
    return{
      loadNews: () => dispatch(newsActions.loadNews())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)

