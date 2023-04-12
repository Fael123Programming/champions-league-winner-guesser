import {
    Text,
    View,
    StyleSheet
} from 'react-native';

function CustomText({text}) {

    return (
        <View style={style.container}>
            <Text style={style.text}>{text}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default CustomText;
