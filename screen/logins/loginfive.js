import { fontSize, style } from '@mui/system'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const LoginFive = () => {
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
          <View style={Styles.headbox}>
            <Text style={Styles.headname} >
          GemBul
            </Text>
          </View>
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
              SIGN IN
            </Text>
          </View>
        </View>

        <View style={Styles.helpmain}>
          <Text style={{ color: 'lightgrey' }}>
            Need help?
          </Text>
        </View>

        <View style={Styles.Donthave}>
          <Text style={{ color: 'lightgrey',fontWeight:'bold', fontSize:17, }}>
            Don't have an account yet ?
          </Text>
        </View>

        <View style={Styles.Create}>
          <Text style={{ color: '#47B5FF',fontWeight:'bold', fontSize:15,}}>
            Create an account
          </Text>
        </View>


      </View>

    </>
  )
}

export default LoginFive

const Styles = StyleSheet.create({
  head: {
    marginTop: 50,
    marginBottom: 20,

  },
  headbox: {
    justifyContent: 'center',
    backgroundColor: '#47B5FF',
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 500,
    width: 200,
    height: 200,
    marginLeft: 80,


  },
  headname: {
    color: '#F55353',
    fontSize: 45,
    fontWeight: 'bold',


  },
  inpbox: {
    alignItems: 'center',
    textAlign: 'center',
  },
  inplist: {
    paddingHorizontal: 10,
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

  },
  secmain: {
    backgroundColor: '#47B5FF',
    borderColor: '#C0C0C0',
    width: '70%',
    alignItems: 'center',

  },
  btntext: {
    alignItems: 'center',
    color: 'white',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight:'bold',
  },
  helpmain: {
    textAlign: 'right',
    alignItems: 'center',
    marginLeft: 190,
    marginTop: 5,

  },
  Donthave:{
    alignItems:'center',
    marginTop:30,
    
  },
  Create:{
    alignItems:'center',
    marginTop:3,
    marginBottom:100,
  }


})