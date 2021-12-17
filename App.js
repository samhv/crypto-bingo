import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/*Eso es la pagina de "bienvenido"*/
function WelcomeScreen({navigation}) {
   return (
       // para darle css/stilo a las etiquetas debes agregar un style={...}
    <View style={styles.container}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 200, height: 200}} />
        <Text style={styles.subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        <Button onPress={() => navigation.navigate('Login')}  title="Continuar"  color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

/* Esto es la pagina de login */
function LoginScreen({navigation}) {

   const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <View style={styles.container2}>
        <TextInput
            onChangeText={setUsername}
            value={username}
            placeholder={"username"}
            autoFocus={true}
            keyboardType={"email-address"}
        />
        <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder={"password"}
            secureTextEntry={true}
        />
        <Button
            onPress={() => navigation.navigate('Register')}
            title='Registrarse' color="red"
        />
      <StatusBar style="auto" />
    </View>
  );
}
/*Brakmel estuvo aqui*/
function RegisterScreen(){
    return (
        <View style={styles.register}>
            <Text style={styles.title3}>Registrate en Bingo =)</Text>
            <View>
                <Text style={styles.error}>Aqui va el futuro menu de registro
                </Text>
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"pink",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 100,
    },
    title: {
        color: "black",
        fontSize: 28,
    },
    subtitle: {
        opacity: 0.7,
        color: "black",
        fontSize: 20,
        textAlign: "justify",
    },
    container2: {
        backgroundColor:"white",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 100,
    },
    error: {
        opacity: 0.7,
        color: "red",
        fontSize: 30,
        textAlign: "justify",
    },
});
