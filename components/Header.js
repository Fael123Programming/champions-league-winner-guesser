import {
    Text,
    View,
    StyleSheet
} from 'react-native';

function Header ({text='Winner Guesser'}){
    return (
        <View style={style.container}>
            <Text style={style.text}>
                {text}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 5,
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 30,
        fontFamily: 'serif',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Header;
