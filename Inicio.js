import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity,  Modal, TextInput  } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

//la importacion de lo que usemos

export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
        correo: "",
        password: "",
    };
  }

  render() {
    //la programacion de los objetos (botones,input,etc)
    const navigation = this.context;
    const click1 = () => {
        console.log("Has dado click al boton de email");
        this.setState({modalVisible: true});
    }

    const correo = () => {
        //conexion al archivo 'verificar' del servidor
        //console.log("Datos: nombre= " + this.state.nombre + " correo= " + this.state.correo + " password= " + this.state.password);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                if(xhttp.responseText === "3") {
                    Alert.alert("Correo no encontrado, registrate");
                } else {
                    if(xhttp.responseText === '0'){
                        Alert.alert("Password Erroneo, intenta de nuevo");
                } else {
                    navigation.navigate("Menu",{nombre:xhttp.responseText});
                }
                
            }
                }
        };
        //Sustituir GET por link de la pagina, eliminar nombre para consultar correo y contraseña
        xhttp.open("GET", "https://mbdevpi1.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&password=" + this.state.password, true);
        xhttp.send();

        console.log("datos nombre= " + this.state.nombre + " &correo= " + this.state.correo + " &password= " + this.state.password);
        navigation.navigate("Menu",{nombre:"Manuel Barajas"});
        cierraModal();
    }

    const click2 = () => {
        console.log("Has dado click al boton de Facebook");
    }

    const ir_a_Inscr = () => {
        console.log("Has dado click al boton de Sign Up");
        navigation.navigate("Inscripcion");
    }

    const cierraModal = () => {
        this.setState({modalVisible: false});
    }
    

    return (
        //parte visible en el telefono
      <View style={styles.fondo}>
        <Image
        style={styles.imagen1}
            source = {require ("./imagenes/imagen.png")} 
        />
        
        <View style = {styles.login}>
            <Text style={styles.textoHandy}>Welcome to Handyman</Text>


            <TouchableOpacity style={styles.boton1} onPress={click1}>
                <View style = {styles.btnEmail}>
                    <Text style={styles.textoBtnLogin}>
                        <Image style={styles.imagenEmail}
                            source = {require ("./imagenes/email.png")} 
                        />
                        <Text style={styles.textoHandy}>    </Text>
                        Sign in with Email
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton2}  onPress={click2}>
            <View style = {styles.btnFacebook}>
                <Text style={styles.textoBtnFacebook}>
                    <Image style={styles.imagenFacebook}
                        source = {require ("./imagenes/facebook.png")} 
                    />
                    <Text style={styles.textoHandy}>    </Text>
                    Sign in Facebook
                </Text>
            </View>
            </TouchableOpacity>

            <Text style={styles.textoSignUp}>
                Don't have an account?
                
            </Text>
            <TouchableOpacity style={styles.boton3}  onPress={ir_a_Inscr}>
                    <Text style={styles.textoSignUpStrong}>
                        SIGN UP
                    </Text>
            </TouchableOpacity>

        </View>

        {/*Modal para ingresar los datos a inicio de sesion*/}
        <Modal 
            transparent={true}
            visible={this.state.modalVisible}
            animationType='slide'
        >
            <View style= {{
                borderWidth: 2,
                borderColor: "#e27743",
                backgroundColor: "#e27743",
                marginLeft: 40,
                marginTop: 380,
                width: 340,
                height: 250,
                borderRadius: 30,
                padding: 20,
                paddingBottom: 5,
            }}>
                <Text style = {styles.txtLabel}>Correo: </Text>
                <TextInput style = {styles.txtInput} onChangeText={(correo) => this.setState({correo})}></TextInput>
                
                <Text style = {styles.txtLabel}>Password: </Text>
                <TextInput style = {styles.txtInput} onChangeText={(password) => this.setState({password})}></TextInput>                
                

                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: "#063970",
                    backgroundColor: "#063970",
                    width: 120,
                    height: 40,
                    borderRadius: 40,
                    marginLeft: 100,
                    marginTop: 20,
                    marginBottom: 20,
                    padding: 5,
                }}>
                    
                    <Text style = {{
                        fontSize: 18,
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                    }} onPress={correo}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>


      </View>
    );
  }
}
// la creacion de estilos
const styles = StyleSheet.create({
    boton1: {
        borderWidth: 2,
        width: 250,
        height: 50,
        borderColor: "#063970",
        backgroundColor: "#063970",
        borderRadius: 30,
        marginLeft: 40,
        marginTop: 15,
    }, boton2: {
        borderWidth: 2,
        width: 250,
        height: 50,
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 30,
        marginLeft: 40,
        marginTop: 15,
    }, boton3: {
        marginTop: -20,
        marginLeft: 215,
        width: 80,
    }, imagen1: {
        width: 350,
        height: 370,
        marginTop: 10,
        marginLeft: 30, 
        /* xiaomi
        marginTop: 120, 
        width: 400,
        height: 420, */ 
    }, imagenEmail: {
        width: 20,
        height: 20,
        marginRight: 20,
    },imagenFacebook: {
        width: 20,
        height: 20,
        marginRight: 20,
    },login: {
        width: 340,
        height: 250,
        borderWidth: 2,
        marginLeft: 40,
        borderColor: "#e27743",
        backgroundColor: "#e27743",
        borderRadius: 30,
    }, fondo: {
        width: 500,
        height: 800,
        backgroundColor: "white",
    }, textoHandy: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 60,
        marginTop: 20,
    }, textoBtnLogin: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 40,
        marginTop: 8,
    }, textoBtnFacebook: {
        color: "#063970",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 40,
        marginTop: 8,
    }, btnEmail: {
        /* borderColor: "#063970",
        backgroundColor: "#063970",
        borderRadius: 30, */
    }, btnFacebook: {
        /* borderColor: "white",
        backgroundColor: "white",
        borderRadius: 30, */
    }, textoSignUp: {
        color: "white",
        fontSize: 15,
        marginLeft: 60,
        marginTop: 20,
    }, textoSignUpStrong: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 0,
    },
    /*Estilos para modal de datos a inicio de sesion  */
    txtLabel: {
        fontWeight: "bold",
        marginTop: 8,
        color: "white",
    },
    txtInput: {
        backgroundColor: "white",
        borderWidth: 2,
        width: 300,
        height: 40,
        borderColor: "white",
        borderRadius: 50,
        marginTop: 10,
        paddingLeft: 10,
    },
    titulo: {
        fontSize: 40,
        textAlign: "center",
    },
});

