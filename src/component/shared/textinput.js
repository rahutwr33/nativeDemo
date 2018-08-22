import React from 'react';
import { TextInput} from 'react-native';


const _Textinput = ({ placeholder,secureTextEntry,onChanges,value}) => {
  return (
    <TextInput
      {...this.props}
      autoCorrect={false}
      value={value}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChanges}
    />
  );
}
export default _Textinput;
