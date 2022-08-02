import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const TodoApp = () => {
    const [inpdata, setInpdata] = useState()
    const [render, setRender] = useState(["ibrar"])
    const [edit, setEdit] = useState()

    //     ADD Data Section 
    let AddData = () => {
        if (edit) {
            render[edit] = inpdata
            setRender([...render])
            setInpdata('')
        }
        else {
            setRender([...render, inpdata])
            setInpdata(null)

        }
        // setRender(inpdata)
    }
    console.log(inpdata)
    //     ADD Data Section 
    //     delete And Delete All Section 

    let DeleteAll = () => {
        setRender([]);
    }

    let DeleteData = (id) => {
        console.log(id)

        const Delete = render.filter((e, i) => {
            return i !== id
        })
        setRender(Delete)


    }
    //      delete And Delete All Section 

    //      Edit Section 
    let EditData = (e, ind) => {
        setEdit(ind)
        setInpdata(e)


    }
    return (
        <>


            <View style={styles.backgroundColour} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}   >
                    <Text style={styles.heading}>To-Do.</Text>

                    <Text style={[styles.heading, { fontSize: 20, marginRight: 20, marginTop: 30, }]}>2022-07-24</Text>
                </View>

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='handled'
                >

                    <View style={styles.ListTopMargin}>
                        {render.map((e, i) => {
                            return (
                                <View>
                                    <TouchableOpacity key={i}   >
                                        <View style={styles.item}>
                                            <View style={styles.itemLeft}>
                                                <View style={styles.circular}></View>
                                                <Text style={styles.itemText}>{e}</Text>
                                            </View>
                                            <View style={[styles.square, { marginRight: 19, }]}>

                                                <Text onPress={() => DeleteData(i)} >
                                                    <Icon name='delete' size={20} color='white' />
                                                </Text>

                                                <View style={[styles.square, { marginRight: 17, }]}>

                                                    <Text onPress={() => EditData(e, i)} >
                                                        <Icon name='edit' size={20} color='white' />
                                                    </Text>

                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>


                <View style={styles.Main}  >
                    {/* // inputData */}
                    <TextInput value={inpdata} style={styles.inpdata} onChangeText={(e) => setInpdata(e)} placeholder="Add Task..." />
                    {/* // inputData */}

                    {/* // Buttons */}
                    <TouchableOpacity onPress={AddData} style={styles.btn}>

                        <View style={styles.btn1}  >
                            <Text style={[styles.btnn, { color: 'midnightblue' }]} >
                                +
                            </Text>
                        </View>
                        {/* <Text style={styles.btn2} onPress={DeleteAll}>
                            -
                        </Text> */}
                        {/* {/* // Buttons */}
                    </TouchableOpacity>
                </View>


            </View>

        </>
    )
}

export default TodoApp


const styles = StyleSheet.create({
    backgroundColour: {
        flex: 1,
        // justifyContent: 'space-between',
        height: 750,
    },
    Main: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',

    },
    heading: {
        color: 'white',
        fontFamily: 'poppins- bold',
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,


    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
    },
    btn1: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 30,
        marginLeft: 10,
        borderRadius: 500,
        width: 50,
        height: 50,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,




    },
    btnn: {
        Color: 'midnightblue',
        fontSize: 26,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: -4,

    },
    inpdata: {
        paddingHorizontal: 15,
        // paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        // borderColor: '#C0C0C0',
        // borderWidth: 1,
        width: '80%',
        marginBottom: 10,



    },
    ListTopMargin: {
        marginTop: 10,
    },


    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        maxWidth: '80%',
        marginLeft: 24.
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'midnightblue',
        opacity: 0.9,
        borderRadius: 5,
        marginRight: 1,
        flexDirection: 'row',
        marginLeft: 10,
    },
    itemText: {
        maxWidth: '100%',

    },
    circular: {
        width: 16,
        height: 16,
        borderColor: 'midnightblue',
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 15,

    },
})



