import {Pressable, StyleSheet, Text} from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedBtn = ({style, ...props}) => {
  return (
   
  <Pressable
        style={({pressed}) =>[
          styles.btn, pressed && styles. pressed
        ]}
        {...props}
  />
  )
}

export default ThemedBtn

const styles = StyleSheet.create({
  btn: {
     backgroundColor: Colors.primary,
     padding: 18,
     borderRadius: 6,
     marginVertical: 10
  },
  pressed:{
     opacity: 0.5
  }
})