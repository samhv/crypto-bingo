import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, TextInput, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



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
          navigation.navigate('Wiki')
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

/*esta es la pagina de wiki, modificar boton por sidebar*/

function WikiImage({ uriImage, navigation }){
  const onPress = () => {
    navigation.navigate('WikiDetail', {
      uriParam: uriImage,
    });
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: uriImage }} style={styles.ImageGallery} />
    </TouchableOpacity>
    )
}


function WikiScreen({navigation}){
    return (
      <View style={styles.container3}>
          <View style={styles.RowStyle}>
              <WikiImage uriImage={'https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/2021/04/2021_Composite_2304x1274_hero.jpg.jpeg'} navigation={navigation}/>
              <WikiImage uriImage={'https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628&width=1024'} navigation={navigation}/>
              <WikiImage uriImage={'https://3dandroidwallpaper.com/wp-content/uploads/2018/03/Android-Wallpaper-HD-Goku-Imagenes.jpg'} navigation={navigation}/>
          </View>
          <View style={styles.RowStyle}>
              <WikiImage uriImage={'https://www.smashbros.com/assets_v2/img/fighter/link/main2.png'} navigation={navigation}/>
              <WikiImage uriImage={'https://tvovermind.com/wp-content/uploads/2021/08/Saint-Seiya-750x422.jpg'} navigation={navigation}/>
              <WikiImage uriImage={'http://pm1.narvii.com/7818/4cb1b15a04085c0eaacf5495eee8b116955e8d55r1-800-1000v2_00.jpg'} navigation={navigation}/>
          </View>
          <View style={styles.RowStyle}>
                <WikiImage uriImage={'https://i.ytimg.com/vi/OWcSJvq1tSc/hqdefault.jpg'} navigation={navigation}/>
                <WikiImage uriImage={'https://i.ytimg.com/vi/yJJtdv9fcDo/hqdefault.jpg'} navigation={navigation}/>
                <WikiImage uriImage={'https://wl-genial.cf.tsp.li/resize/728x/jpg/f22/83b/2585e75b99a2cd3ebb4a0daab5.jpg'} navigation={navigation}/>
          </View>
        <StatusBar style="auto" />
      </View>
    );
    }
    
    function ShareButton ({uriImage}) {
      const onPress = () => {
          Share.share({
            message: uriImage
          });
      }
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.TextDeatil}>
            🔁
          </Text>
        </TouchableOpacity>
        )
    }

    function Like () {
      // let contadorLike = 0;
      const [ contadorLike, setContadorLike] = useState(0)
      
      const onPress = () => {
        // contadorLike = contadorLike + 1;
        setContadorLike(contadorLike + 1)
      }
      if (contadorLike == 0) {
        return (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.TextDeatil}>
              🤍
            </Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.TextDeatil}>
              ❤️
              {contadorLike}
            </Text>
          </TouchableOpacity>
          )
      }
    }
    function Comment () {
      const onPress = () => {
      }
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.TextDeatil}>
            💬
          </Text>
        </TouchableOpacity>
        )
    }

  function DetailScreen({ route }){
    const {uriParam} = route.params;
    return (
      <View style={styles.DetailScreen2}>
        <View>
          <Image source={{uri: uriParam}} style={styles.DetailImage} />
        </View>
        <View style={ styles.ActionsContainer}>
          <Like />
          <Comment />
          <ShareButton uriImage={uriParam} />
        </View>
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

function DrawerContent({navigation}){
    return (
        <View style={styles.DrawerContentStyle}>
          <View style={styles.DrawerContentStyle6}>
              <Text style={styles.TextDrawerStyle}>
              👤
              </Text>
              <Text style={styles.TextDrawerStyle2}>
              Welcome to the best App
              </Text>
              <View style={styles.ButtonStyle2}>
              <Button onPress={() => navigation.navigate('Login')}  title="Logout"  color="blue"
              />
              </View>
          </View>
          <View style={styles.DrawerStyle5}>
              <Text style={styles.TextDrawerStyle3}>
              Created with ❤️ by:
              </Text>
              <View style={styles.DrawerStyle4}>
                <Text style={styles.TextDrawerStyle4}>
                - Sam Hernandez
                </Text>
                <Text style={styles.TextDrawerStyle4}>
                - Oscar Santiago
                </Text>
                <Text style={styles.TextDrawerStyle4}>
                - Luis Bohorquez
                </Text>
              </View>
          </View>
        </View>
    );
  }

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function WikiNavigator() {
  return (
      <Drawer.Navigator initialRouteName="WikiHome" drawerContent={(props) => <DrawerContent{...props} />}>
        <Drawer.Screen name="WikiHome" component={WikiScreen} />
      </Drawer.Navigator>
  );
}

function EntryNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Wiki" component={WikiNavigator} />
        <Stack.Screen name="WikiDetail" component={DetailScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default EntryNavigator;

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
    container3: {
      backgroundColor:"#b2c8ff",
      flexDirection: "column",
      flex: 1,
    },
     RowStyle: {
       flexDirection: "row",
       flex: 1,
       justifyContent: "space-between",
       alignItems: "center",
       marginLeft: 20,
       marginRight: 20,
    },
     ButtonStyle2:{
       borderColor: "blue",
       borderStyle: "solid",
       borderWidth: 0.8,
       borderRadius: 7,
       marginTop: 20,
     },
     DetailImage: {
       width: 200,
       height: 300,
       borderRadius: 20,
     },
     DetailScreen2: {
       alignItems: "center",
       paddingTop: 80,
       flex: 1,
       backgroundColor:"#b2c8ff",
     },
     ImageGallery: {
       width: 100,
       height: 100,
       paddingHorizontal: 10,
       borderRadius: 25,
       backgroundColor: "black",
     },
     DrawerContentStyle: {
       paddingTop: 40,
       flex: 1,
       justifyContent: "space-between",
       backgroundColor:"#b2c8ff",
     },
     DrawerContentStyle6: {
       alignItems: "center",
     },
     TextDrawerStyle: {
       fontSize: 60,
     },
     TextDrawerStyle2: {
       fontSize: 20,
       paddingTop: 30,
       color: "white",
     },
     TextDrawerStyle3: {
       fontSize: 20,
       fontWeight: "bold",
       color: "white",
     },
     TextDrawerStyle4: {
       color: "white",
     },
     TextDeatil: {
       fontSize: 80,
       paddingTop: 90,
     },
     DrawerStyle4: {
       fontSize: 10,
       paddingLeft: 20,
       paddingTop: 6,
     },
     DrawerStyle5: {
       marginBottom: 40,
       paddingLeft: 20,
     },
    error: {
        opacity: 0.7,
        color: "red",
        fontSize: 30,
        textAlign: "justify",
    
      },
    ActionsContainer: {
      flexDirection: "row",
    },  
});
