import {View} from 'react-native'

const Spacer = ({style, height = 10, ...props}) => {

    return (
        <View style={[{height},style]}
         {...props}
        />
    )
}

export default Spacer
