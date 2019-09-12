import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//require('../assets/images/splash.png')
export default function HomeScreen(props){
    
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View>
                    <Image source = {{
                            uri : props.sourceIMG
                        }}
                        style={{ width: 50, height: 50}}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: "bold"}}>{props.nameOption}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign:"center"}}>{props.contentOption}</Text>
                </View>
            </View>
            <View style={styles.right}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwS1tZnAS_TzEtBY2anH2_ycKgdWkWqdsHNSOAlV8dE2WLTNs_A'}} 
                        style={{ width: 20, height: 20}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
    },
    left: {
        marginLeft: '20%',
        marginRight: '20%',
        alignItems: 'center', 
        flex: 0.9,
        justifyContent: 'center'
    },
    right: {
        flex: 0.1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})
