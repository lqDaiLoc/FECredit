
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
    CheckBox,
} from 'react-native';
import { Provider, connect } from 'react-redux';

class KiemTraHoSoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    nextPage = () => {
        this.props.navigation.navigate('ChiTiet');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'green' }}>Kiểm tra hồ sơ</Text>
                    <View style={{ width: 100, height: 20, backgroundColor: 'black' }}>
                        <Image
                            source={require('../assets/images/form3.png')}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    <Text style={{ fontSize: 25, color: 'green' }}>Thông tin cá nhân</Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.textColorGray}>Họ và Tên</Text>
                        <Text>{this.props.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.textColorGray}>Giới Tính</Text>
                            <Text>{this.props.GioiTinh}</Text>
                        </View>
                        <View>
                            <Text style={styles.textColorGray}>Ngày tháng năm sinh</Text>
                            <Text>{this.props.NgaySinh}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textColorGray}>Số CMND/thẻ căn cước</Text>
                        <Text>{this.props.CMND}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'green' }}>Chi Tiết khoản vay</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.textColorGray}>Số tiền vay(triệu)</Text>
                            <Text>{this.props.Money}(triệu)</Text>
                        </View>
                        <View>
                            <Text style={styles.textColorGray}>Thời gian vay</Text>
                            <Text>{this.props.Mounth}(tháng)</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textColorGray}>Số tiền trả góp hàng tháng</Text>
                        <Text>12 triệu PROPS</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonStyle} >
                        <Text style={{ color: 'white' }}>Đồng ý</Text>
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
        flex: 0.20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    body: {
        flex: 0.7,
        justifyContent: 'space-around',
    },
    footer: {
        flex: 0.1,
        justifyContent: 'flex-end',
    },
    buttonStyle: {
        width: '100%',
        height: 40,
        backgroundColor: '#3ED658',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColorGray: {
        color: 'gray'
    }

});


export default connect(state => {
    return {
        name: state.name,
        GioiTinh: state.GioiTinh,
        CMND: state.CMND,
        NgaySinh: state.NgaySinh,
        Money: state.Money,
        Mounth: state.Mounth,
    }
})(KiemTraHoSoScreen);
