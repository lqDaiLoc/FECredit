
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Slider,
  Alert
} from 'react-native';
import {CheckBox } from 'react-native-elements'
import { Provider, connect } from 'react-redux';
class ChiTietVayScreen extends React.Component{
    
    
    constructor(props) {
        super(props);
        this.state = {
            valueMoney: 8,
            valueMounth: 6,
            checked: false,
        };
    }
    
    changeMoney(value) {
        this.setState(() => {
          return {
            valueMoney: parseFloat(value),
          };
        });
    }
    changeMounth(value) {
        this.setState(() => {
          return {
            valueMounth: parseFloat(value),
          };
        });
    }
    nextPage = async () => {
        await this.props.dispatch({ type: 'setMoney', value: this.state.valueMoney })
        await this.props.dispatch({ type: 'setMounth', value: this.state.valueMounth })
        if(this.state.checked){
            await this.props.navigation.navigate('KiemTraHoSo');
        }else{
            Alert.alert (
                'bạn cần xác nhận đăng ký bảo hiểm'
            )
        }
      }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 20, color: 'green'}}>Chi tiết khoản vay</Text>
                    <View style={{width: 100, height: 20, backgroundColor: 'black'}}>
                        <Image 
                            source = {require('../assets/images/form2.png')}
                            style={{width: '100%', height: '100%'}}
                        />
                    </View>
                    <Text style={{textAlign: 'center'}}>Vui lòng nhập thông tin cá nhân và nhu cầu vay của bạn dưới đây. Thông tin bạn cung cấp sẽ được bảo mật và chỉ sử dụng cho mục đích sử lý khoản vay</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyItem}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Số tiền vay (triệu)</Text>
                            <Text style={{color: 'red'}}>{this.state.valueMoney} triệu</Text>
                        </View>
                        <Slider 
                            step={1}
                            maximumValue={50}
                            minimumValue={8}
                            onSlidingComplete={this.changeMoney.bind(this)}
                            value={this.state.valueMoney}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%'}}>
                            <Text style={styles.textColorGray}>8 triệu</Text>
                            <Text style={styles.textColorGray}>50 triệu</Text>
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Thời gian vay</Text>
                            <Text style={{color: 'red'}}>{this.state.valueMounth} tháng</Text>
                        </View>
                        <Slider 
                            step={1}
                            maximumValue={36}
                            minimumValue={6}
                            onSlidingComplete={this.changeMounth.bind(this)}
                            value={this.state.valueMounth}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%'}}>
                            <Text style={styles.textColorGray}>6 tháng</Text>
                            <Text style={styles.textColorGray}>36 tháng</Text>
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CheckBox
                                center
                                title='Tôi đồng ý đăng ký bảo hiểm cho khoản vay'
                                checked={this.state.checked}
                                onPress={() => { this.setState({ checked: !this.state.checked }) }}
                            />
                        </View>
                    </View>
                    <View style={styles.bodyItem, {backgroundColor: '#E6E9DE', borderRadius: 5}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Số tiền trả góp hàng tháng</Text>
                            <Text style={{fontSize: 30, color: 'red'}}>2 triệu</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.nextPage}>
                        <Text style={{color: 'white'}}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%'
    },
    header: {
        flex: 0.25,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    body: {
        flex: 0.55,
        justifyContent: 'space-around',
    },
    footer: {
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    ngaySinhStyle: {
        width: '65%',
        marginLeft: '10%',
        height: 30,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
    },
    bodyItem: {
        flex: 1,
        borderColor: 'black',
    },
    buttonStyle: {
        width: '100%', 
        height: 40, 
        backgroundColor: '#3ED658',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColorGray:{
        color: 'gray'
    }
});


export default connect(state => {
    return { 
      name: state.name
    }
  })(ChiTietVayScreen);
