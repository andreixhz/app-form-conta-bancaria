import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {

  const [limit, setLimit] = useState(0);
  const [Brasileiro, setBrasileiro] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        Nome
        <TextInput></TextInput>
      </View>

      <View>
        Idade
        <TextInput></TextInput>
      </View>

      <View>
        Sexo
        <Picker>
          <Picker.Item value="homem" label="Macho"></Picker.Item>
          <Picker.Item value="mulher" label="Muie"></Picker.Item>
        </Picker>
      </View>

      <View>
        Escolaridade
        <Picker>
          <Picker.Item value="medio" label="medio"></Picker.Item>
          <Picker.Item value="superior" label="superior"></Picker.Item>
        </Picker>
      </View>

      <View>
        Limite
        <Slider onValueChange={setLimit} maximumValue={1000} value={limit}></Slider>
        value: {limit}
      </View>

      <View>
        Brasileiro
        <Switch value={Brasileiro} onValueChange={setBrasileiro}></Switch>
      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
});
