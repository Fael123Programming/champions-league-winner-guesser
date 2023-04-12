import {
    Pressable,
    Text,
    View,
    StyleSheet
} from 'react-native';

function CustomButton({onPress}) {
    return (
        <View style={style.container}>
            <Pressable
                onPress={onPress}
                style={style.button}
            >
                <Text style={style.buttonText}>Guess</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderColors: 'black',
        width: 350,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'serif'
    }
});

export default CustomButton;
