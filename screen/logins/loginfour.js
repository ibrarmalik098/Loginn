import { fontSize, style } from '@mui/system'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const LoginFour = () => {
    return (
        <>
            <View>
                <View>
                    <Text>

                    </Text>
                </View>

                <View style={Styles.underline} >
                </View>

                <View style={Styles.head}>
                    <Text style={Styles.headname}>
                        Sign Up
                    </Text>
                </View>

                <View style={Styles.inpbox}>

                    <View style={[Styles.inplist, { marginTop: 25 }]}>
                        <TextInput placeholder='E-mail or phone number' />
                    </View>

                    <View style={[Styles.inplist, { marginTop: 15 }]}>
                        <TextInput placeholder='Password' />
                    </View>
                </View>
                <View style={Styles.forget}>
                    <Text style={Styles.forgettext}>
                        Forget Password ?
                    </Text>
                </View>

                <View style={Styles.btnmain}>
                    <View style={Styles.secmain}>
                        <Text style={Styles.btntext}>
                            Log in
                        </Text>
                    </View>
                </View>
                <View style={Styles.signupmain}>
                    <Text style={Styles.signuptext}>
                        OR
                    </Text>
                </View>
                <View style={Styles.btnmain}>
                    <View style={Styles.facebook}>
                        <Text style={Styles.btntext}>
                            Login with Facebook
                        </Text>
                    </View>
                </View>
            </View>

        </>
    )
}

export default LoginFour

const Styles = StyleSheet.create({
    head: {
        marginTop: 50,
        marginBottom: 20,
    },
    headname: {
        color: '#F55353',
        fontSize: 40,
        alignItems: 'center',
        fontWeight: 'bold',
        marginLeft: 10,

    },
    inpbox: {
        alignItems: 'center',
        textAlign: 'center',
    },
    inplist: {
        paddingHorizontal: 10,
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width: '80%',
        borderWidth: 1
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
        marginTop: 20,

    },
    secmain: {
        backgroundColor: '#F55353',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width: '70%',
        alignItems: 'center',

    },
    btntext: {
        alignItems: 'center',
        color: 'white',
        paddingVertical: 10,
        fontSize: 20,
    },
    signupmain: {
        alignItems: 'center',
        marginTop: 30,
    },
    signuptext: {
        color: 'black',
        fontSize: 20,
    },
    underline: {
        borderBottomWidth: 0.2,
        opacity: 0.7,

    },
    facebook: {
        marginTop:15,
        backgroundColor: '#1877f2',
        borderRadius: 30,
        borderColor: '#C0C0C0',
        width: '70%',
        alignItems: 'center',
        marginBottom:230,

    }
})