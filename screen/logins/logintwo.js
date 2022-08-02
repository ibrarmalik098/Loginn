import { fontSize, style } from '@mui/system'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
const LoginTwo = () => {
    return (
        <>
            <View>
                <View style={Styles.head}>
                    <Text style={Styles.headname}>
                        HeyAPP
                    </Text>
                </View>

                <View style={Styles.inpbox}>

                    <View style={[Styles.inplist, { marginTop: 25 }]}>
                        <TextInput placeholder='Email...' />
                    </View>

                    <View style={[Styles.inplist, { marginTop: 15 }]}>
                        <TextInput placeholder='Password...' />
                    </View>
                </View>
                <View style={Styles.forget}>
                    <Text style={Styles.forgettext}>
                        Forget Password ?
                    </Text>
                </View>

                <View style={Styles.btnmain}>
                    <View style={Styles.secmain}>
                        <Text  style={Styles.btntext}>
                            Login
                        </Text>
                    </View>
                </View>
                <View style={Styles.signupmain}>
                    <Text style={Styles.signuptext}>
                        SignUp
                    </Text>
                </View>
            </View>

        </>
    )
}

export default LoginTwo

const Styles = StyleSheet.create({
    head: {
        marginTop: 200,
    },
    headname: {
        color: '#fb5b5a',
        fontSize: 50,
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
        backgroundColor: '#465881',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width:"80%",
    },
    forget: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    forgettext: {
        color: 'white',
        opacity: 0.7,
        fontFamily: 'AndroidFonts'
    },
    btnmain: {
        alignItems: 'center',
        marginTop:20,

    },
    secmain: {
        backgroundColor: '#fb5b5a',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width:"80%",
        alignItems:'center',

    },
    btntext:{
        alignItems:'center',
        color:'white',
        paddingVertical:10,
        fontSize:20,
    },
    signupmain:{
        alignItems:'center',
        marginTop:8,
        marginBottom:233
    },
    signuptext:{
        color:'white',
        fontWeight:'bold',
    }
})