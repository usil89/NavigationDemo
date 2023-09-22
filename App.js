import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View style={StyleSheet.create}>
      <Text>Home Screen</Text>
      <Button title="Go To Details" onPress={() => navigation.navigate('Details' ,
          { 
            itemId : 86,
            otherParam :' Something from Home',
          })
        }>

      </Button>
    </View>
  )
}

function DetailsScreen({ route, navigation}) {

  const { itemId, otherParam } = route.params;

  return (
    <View style={StyleSheet.create}>
      <Text>Details Screen</Text>

      <Text>Item Id : {JSON.stringify(itemId)}</Text>
      <Text>otherParam : {JSON.stringify(otherParam)}</Text>

      <Button title="Go To Details2" onPress={() => navigation.push('Details2')}></Button>

      <Button title="Go To Home ..again" onPress={() => navigation.push('Details', {
        itemId : Math.floor(Math.random()+ 100)
      })}></Button>

      <Button title="Go To Home" onPress={() => navigation.navigate('Home')}></Button>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <Button title='Go Back to first screen in stack' onPress={() => navigation.popToTop()}></Button>
    </View>
  )
}
function Details2Screen({navigation}) {
  return (
    <View style={StyleSheet.create}>
      <Text>Details 2 Screen</Text>
      <Button title="Go To Details" onPress={() => navigation.push('Details')}></Button>
      <Button title='Go Back to first screen in stack' onPress={() => navigation.popToTop()}></Button>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{title : "Overview"}}></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
          <Stack.Screen name="Details2" component={Details2Screen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
