import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from '../screen/Home'
import Details from '../screen/Details'
import Splash from '../screen/Splash'
import DetailsMovies from '../screen/DetailsMovies'
const Stack = createStackNavigator();

function Navigation() {
  return (
      <NavigationContainer>
          {/* <Stack.Navigator>  */}
              <Stack.Navigator initialRouteName="Details" screenOptions={{  headerShown:false}} >
                   <Stack.Screen name="Splash" component={Splash} />
                   <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="DetailsMovies" component={DetailsMovies} />

              </Stack.Navigator>
          {/* </Stack.Navigator>  */}
    </NavigationContainer>
    
  );
}
export default Navigation