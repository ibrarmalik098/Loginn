import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import LoginFive from './screen/logins/loginfive'
import LoginFour from './screen/logins/loginfour'
import LoginOne from './screen/logins/loginone'
import LoginThree from './screen/logins/loginthree'
import LoginTwo from './screen/logins/logintwo'
import TodoApp from './screen/logins/todoapp'


const App = () => {
  return (
    <>
      <ScrollView>

        <View  >
          {/* ======= LoginScreen 1 ======= */}

          <ScrollView>

            <View style={styles.blue}>

              <View >
                <LoginOne />
              </View>
            </View>

          </ScrollView>

          {/* ======= LoginScreen 1 ======= */}

          <ScrollView>
            <View style={styles.lightgrey}  >
              <LoginTwo />
            </View>
          </ScrollView>

          <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
              <LoginThree />
            </View>
          </ScrollView>

          <ScrollView>
            <View style={{ backgroundColor: 'white' }} >
              <LoginFour />
            </View>
          </ScrollView>

          <ScrollView>
            <View >
              <LoginFive />
            </View>
          </ScrollView>


        </View>

        <View style={{ backgroundColor: 'midnightblue', }} >
          <TodoApp />
        </View>
      </ScrollView>


    </>
  )
}

export default App


const styles = StyleSheet.create({
  blue: {
    backgroundColor: 'blue',
  },
  lightgrey: {
    backgroundColor: '#003f5c'
  }
})

