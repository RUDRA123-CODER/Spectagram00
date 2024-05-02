import react, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component{
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justify: "center",
                    alignItems:"center"
                }}>
                <Text>Feeds</Text>    
            </View>
        )
    }
}