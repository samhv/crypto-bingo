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
        <Image source={{uri: 'http://clipart-library.com/images_k/png-images-with-transparent-background/png-images-with-transparent-background-1.png'}}
        style={{width: 300, height: 300,}} />
        <Text style={styles.subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        <Button onPress={() => navigation.navigate('Login')}  title="Continuar"  color="blue"
        />
      <StatusBar style="auto" />
    </View>
  );
}

/* Esto es la pagina de login */
function LoginScreen({navigation}) {

   const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onPress= () => {
      if (username == "Sam" && password == "Sam" ) {
          navigation.navigate('Register')
      }
      else {
        alert("Error")
      }
    }

  return (
    <View style={styles.container2}>
        <TextInput
            onChangeText={setUsername}
            value={username}
            placeholder={"username"}
            autoFocus={true}
            keyboardType={"email-address"}
            style={styles.usernameStyle}
        />
        <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder={"password"}
            secureTextEntry={true}
            style={styles.PasswordStyle}
        />
        <Button
            onPress={onPress}
            title='Login' color="blue"
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
        backgroundColor:"#b2c8ff",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingBottom: 30,
        paddingTop: 20,
        flex: 1,
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
        paddingBottom: 80,
    },
    container2: {
        backgroundColor:"#b2c8ff",
        alignItems: "center",
        flex: 1,
    },
    usernameStyle: {
      borderStyle: "dotted",
      borderWidth: 2,
      width: 200,
      paddingLeft: 70,
      paddingTop: 8,
      paddingBottom: 8,
      borderColor: "blue",
      marginTop: 30,
    },
    PasswordStyle: {
      borderStyle: "dotted",
      borderWidth: 2,
      width: 200,
      paddingLeft: 70,
      paddingTop: 8,
      paddingBottom: 8,
      borderColor: "blue",
      marginTop: 30,
      marginBottom: 30,
    },
    error: {
        opacity: 0.7,
        color: "red",
        fontSize: 30,
        textAlign: "justify",
    },
});
