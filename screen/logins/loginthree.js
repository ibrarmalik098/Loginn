import { fontSize, style } from '@mui/system'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
const LoginThree = () => {
    return (
        <>
            <View>
                <View style={Styles.head}>
                    <Text style={Styles.headname}>
                        skout
                    </Text>
                </View>

                <View style={Styles.inpbox}>

                    <View style={[Styles.inplist, { marginTop: 25 }]}>
                        <TextInput placeholder='+99900 6565 0909' />
                    </View>

                    <View style={[Styles.inplist, { marginTop: 15 }]}>
                        <TextInput placeholder='Password' />
                    </View>
                </View>

                <View style={Styles.btnmain}>
                    <View style={Styles.secmain}>
                        <Text  style={Styles.btntext}>
                            Login
                        </Text>
                    </View>
                </View>
                <View style={Styles.forget}>
                    <Text style={Styles.forgettext}>
                        Forget Password ?
                    </Text>
                    <Text style={Styles.signuptext}>
                        SignUp
                    </Text>
                </View>
                
            </View>

        </>
    )
}

export default LoginThree

const Styles = StyleSheet.create({
    head: {
        marginTop: 300,
    },
    headname: {
        color: '#36AE7C',
        fontSize: 90,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inpbox: {
        alignItems: 'center',
        textAlign: 'center',
    },
    inplist: {
        paddingHorizontal: 10,
        backgroundColor: '#DFDFDE',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width: 350,
    },
    forget: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:130,
    },
    forgettext: {
        color: 'black',
        opacity: 0.7,
        fontFamily: 'AndroidFonts'
    },
    btnmain: {
        alignItems: 'center',
        marginTop:30,

    },
    secmain: {
        backgroundColor: '#3CCF4E',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width: 350,
        alignItems:'center',

    },
    btntext:{
        alignItems:'center',
        color:'white',
        paddingVertical:10,
        fontSize:20,
    },
    signuptext:{
        marginLeft:7,
        color:'#3CCF4E',
        fontWeight:'bold',
    }
})