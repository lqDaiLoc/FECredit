
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
    DatePickerAndroid
} from 'react-native';
import { Provider, connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const radio = [
    { label: "Nam", value: 0 },
    { label: "Nữ", value: 1 },
]
class InfoScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            HoTen: '',
            CMND: '',
            NgaySinh: '',
            flat: true,
            GioiTinh: 'Nam',

            date: new Date(),
            newDay: 0,
            newMouth: 0,
            newYear: 0,
        }
        this.showDatePicker.bind(this);
    }
    showDatePicker = async (options) => {
        try {
          const {action, year, month, day} = await DatePickerAndroid.open(options);
          if (action !== DatePickerAndroid.dismissedAction) {
            tmpMonth = await month + 1;
            await this.setState({
                newDay: day,
                newMouth: tmpMonth,
                newYear: year,
                NgaySinh: day + '/'  + tmpMonth +  '/'  + year,
            })
          }
        } catch ({code, message}) {
          console.warn('error ', code, message);
        }
        
    };
    nextPage = async () => {
        await this.props.dispatch({ type: 'setName', value: this.state.HoTen })
        await this.props.dispatch({ type: 'setGioiTinh', value: this.state.GioiTinh})
        await this.props.dispatch({ type: 'setCMND', value: this.state.CMND})
        await this.props.dispatch({ type: 'setNgaySinh', value: this.state.NgaySinh})
        if(this.state.HoTen = '' || this.state.CMND == '' || this.state.NgaySinh == ''){
           await alert('Chưa điền đủ thông tin');
        }
        else
        {
            this.props.navigation.navigate('ChiTiet');
        }
    }
    onPresRadio = async (value) => {
        if (value == 0) {
            await this.setState({
                GioiTinh: 'Nam'
            })
        } else {
            await this.setState({
                GioiTinh: 'Nữ'
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'green' }}>Thông tin cá nhân</Text>
                    <View style={{ width: 100, height: 20 }}>
                        <Image source={require('../assets/images/form1.png')}
                            style={{ width: "100%", height: '100%' }} />
                    </View>
                    <Text style={{ textAlign: 'center' }}>Vui lòng nhập thông tin cá nhân và nhu cầu vay của bạn dưới đây. Thông tin bạn cung cấp sẽ được bảo mật và chỉ sử dụng cho mục đích sử lý khoản vay</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyItem}>
                        <Text style={{ flex: 0.5 }}>Họ và tên, vui lòng điền dấu và đầy đủ</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Nguyễn Văn A"
                            onChangeText={(HoTen) => this.setState({ HoTen })}
                        />
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={{ flex: 0.5 }}>Giới tính</Text>
                        <View style={{}}>
                            <RadioForm
                                radio_props={radio}
                                onPress={(label) => { this.onPresRadio(label) }}
                                formHorizontal={true}
                                buttonSize={15}
                                style={{ justifyContent: 'space-around' }}
                            />
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={{ flex: 0.5 }}>Số CMND/thẻ căn cước</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="1234567890"
                            onChangeText={(CMND) => this.setState({ CMND })}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={{ flex: 0.5 }}>Ngày tháng năm sinh</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <TextInput
                                style={styles.ngaySinhStyle}
                                placeholder="11/11/2011"
                                //onChangeText={(NgaySinh) => this.setState({ NgaySinh })}
                                value = {this.state.NgaySinh}
                                editable = {false}
                            />
                            <TouchableOpacity 
                                style={{ width: 25, height: 25, backgroundColor: '#EF31E9', marginRight: '10%', marginTop: 5 }}
                                onPress={() => this.showDatePicker({date: this.state.date})}>
                                <Image source={require('../assets/images/Calendar.png')}
                                    style={{ width: "100%", height: '100%' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.nextPage}>
                        <Text style={{ color: 'white' }}>Tiếp theo</Text>
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
    textInputStyle: {
        width: '80%',
        marginLeft: '10%',
        height: 25,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5
    },
    ngaySinhStyle: {
        width: '65%',
        marginLeft: '10%',
        height: 25,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5
    },
    bodyItem: {
        flex: 1,
    },
    buttonStyle: {
        width: '100%',
        height: 40,
        backgroundColor: '#3ED658',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(state => {
    return {
        name: state.name
    }
})(InfoScreen);