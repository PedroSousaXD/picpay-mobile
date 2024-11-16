import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { registerUser } from '../services/api'; 
import styles from '../styles/styles';  
import Icon from 'react-native-vector-icons/Feather';  

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [document, setDocument] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    setError('');
    try {
      const response = await registerUser(userName, document, email, password);
      navigation.navigate('Login'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.text}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Digite seu nome"
        />
        <Text style={styles.text}>Documento:</Text>
        <TextInput
          style={styles.input}
          value={document}
          onChangeText={setDocument}
          placeholder="Digite seu CPF ou CNPJ"
        />
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text style={styles.text}>Senha:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword} 
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon 
              name={showPassword ? 'eye-off' : 'eye'} 
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ marginTop: 10, color: 'blue' }}>
            Já tem uma conta? Realize o login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;