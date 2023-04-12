import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

function GuessWinnerScreen() {
    const teams = [
        'Benfica', 'Real Madrid', 'Chelsea', 'Man. City', 
        'Napoli', 'Milan', 'Bayer Mun.', 'Inter'
    ];
    const randomTeam = function() {
        let pos = Math.trunc(Math.random() * teams.length);
        return teams[pos];
    };
    const [winnerTeam, setWinnerTeam] = useState('');
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/champions-league-background.jpg')}
                resizeMode='cover'
                style={style.backgroundImage}
            > 
                <Header/>
                <CustomText
                    text={winnerTeam}
                /> 
                <CustomButton
                    onPress={() => setWinnerTeam(randomTeam())}
                />
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    }
});

export default GuessWinnerScreen;
