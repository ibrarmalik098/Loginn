import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
const LoginOne = () => {
    return (
        <>
            <View>

                <View>
                    <Text style={styles.head}>
                        WELCOME
                    </Text>
                </View>
                <View style={styles.bgwhite}>
                    <View style={styles.login}>
                        <Text style={styles.Loginhead}>
                            Login 
                        </Text>
                    </View>

                    <View style={styles.inpbox}>

                        <View style={styles.inp}>
                            <TextInput style={styles.inpline} placeholder='Email' />
                        </View>

                        <View style={styles.inp}>
                            <TextInput style={styles.inplines} placeholder='password' />
                        </View>
                    </View>

                    <View style={styles.btnbox}>
                        <View style={styles.btnsec}>
                            <Text style={{color:'white',fontSize:20}} >
                                Login
                            </Text>
                        </View>
                    </View>
                    <View style={styles.link}>
                        <View style={{ marginRight: 15 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }} >Create An Account?</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, }} >Sign Up </Text>
                        </View>
                    </View>

                </View>
            </View>

        </>
    )
}

export default LoginOne

const styles = StyleSheet.create({
    head: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'AndroidFonts',
        marginTop: 200,
        marginLeft: 25,
    },
    bgwhite: {
        marginTop: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    Loginhead: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 30,
        color: 'black',
        fontFamily: 'fantasy',
    },
    inpbox: {
        marginLeft: 30,
        marginTop: 40,
        marginBottom: 30,
    },
    inpline: {
        borderBottomWidth: 1,
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        marginBottom: 19,
    },
    inplines: {
        borderBottomWidth: 1,
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
    },
    btnbox: {
        // textAlign:'center',
        alignItems: 'center',
        marginVertical: 8,


    },
    btnsec: {
        paddingVertical:15,
        backgroundColor: 'blue',
        borderRadius: 30,
        borderColor: 'black',
        borderWidth:2.3,
        width: 250,
        alignItems:'center',
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 125,
    }

}) 