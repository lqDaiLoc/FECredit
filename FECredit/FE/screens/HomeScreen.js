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
import Option from '../components/Option';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    
  }
  nextPage = () => {
    //setTimeout(() => {
      this.props.navigation.navigate('Info');
    //}, 3000);
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoStyle}>
          <Image source={require('../assets/images/logo.png')} 
            style={{ width: '100%', height: "100%"}}/>
        </View>
        <View style={styles.bodyStyle}>
          <TouchableOpacity style={styles.optionStyle} onPress={this.nextPage}> 
            <Option nameOption ='Khoảng vay cá nhân' contentOption ='Bất cứ khi nào, bất cứ nơi đâu bạn cũng có thể vay tiền mắt dễ dàng.' sourceIMG = 'https://lh3.googleusercontent.com/kol7vd0SXsbl2UG_5DOdeOhj9PAqt_fn_jNA653mAnLA1l498Xc2Jodgz5CyEt27sg=w150'></Option>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle}>
            <Option nameOption ='Thẻ tín dụng' contentOption ='Làm hồ sơ thẻ tín dụng FE Credit dễ dàng, tận hưỡng 45 ngày miễn phí lãi suất.' sourceIMG = 'https://banner2.kisspng.com/20180624/wuy/kisspng-smart-card-electronic-identification-computer-icon-5b2f69c1e2d9b5.4842458815298339219292.jpg'></Option>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle}> 
            <Option nameOption ='Ký điện tử' contentOption ='Ký điện tử là quy trình ký cho phép khách hàng ký trực tiếp trên hợp đồng điện tử.' sourceIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1e89lLfmnYMuTB30vPD9rfL1FPBLMjfr0UhCzywzWwKthhZiaA'></Option>
          </TouchableOpacity>
          
        </View>
      </View>
    );
}}

HomeScreen.navigationOptions = {
  header: null,
  footer: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    flex: 0.2,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyStyle: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionStyle: {
    width: '90%',
    height: '30%',
    marginTop: 20,
    justifyContent: 'center',
  }
  
});
