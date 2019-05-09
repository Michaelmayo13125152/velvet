import { Dimensions, Platform, StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const { width, height } = Dimensions.get('window');

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? 550 : height / 1.8;
export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    width,
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: height / 2,
    resizeMode: 'cover',
    // position: 'absolute',
    overflow: 'hidden',
    // zIndex: -1,
    // top: 0,
    // left: 0,
    // right: 0,
    // width: 300,
    // alignItems: 'center',
    // height: HEADER_MAX_HEIGHT,
  },
  scrollContent: {
    zIndex: -1,
    marginTop: Platform.OS === 'ios' ? 0 : HEADER_MAX_HEIGHT,
    backgroundColor: 'black',
    borderRadius: 12,
  },
  textSection: {
    position: 'absolute',
    zIndex: 1,
    top: 110,
    left: 20,
    right: 10,
    justifyContent: 'flex-start',
  },
  shoppingBag: {
    position: 'absolute',
    top: 105,
    left: 78,
    // width: 40,
    // height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopBag: {
    backgroundColor: 'white',
    height: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starIcon: {
    position: 'absolute',
    opacity: 1,
    top: 100,
    right: Platform.OS === 'ios' ? width - width + 20 : width, //hiding star icon due to interpolate issue for android
    // backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: Colors.black,
    opacity: 0.5,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  Bar: {
    paddingTop: 20,
    width: 80,
    alignSelf: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 3,
  },
  fashion: {
    fontSize: 12,
    paddingRight: 10,
    color: Colors.white,
    fontFamily: 'Raleway-Regular',
    alignSelf: 'flex-start',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Regular',
    color: Colors.white,
    fontSize: 36,
  },
  gradient: {
    zIndex: -1,
    opacity: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
  },
});

export const ArticleTextStyles = {
  articleText: {
    p: {
      // justifyContent: 'space-around',
      color: Colors.white,
      fontFamily: 'Raleway-Regular',
      fontSize: 18,
      alignSelf: 'center',
      margin: 0,
      padding: 0,
      width: width - 20,
      // padding: 14,
    },

    div: {
      paddingLeft: 10,
      paddingRight: 10,
      alignSelf: 'center',
    },
    img: {
      padding: 0,
    },
  },
};
