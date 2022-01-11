import React, {useEffect,useCallback} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Details");
      }, 2000);
    }, []);
    return (
        <View>
            <TouchableOpacity >
                <Text>WelCOme to  App</Text>
                
            </TouchableOpacity>
           
        </View>
    )
}

export default Splash