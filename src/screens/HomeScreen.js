// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { fetchUserTransactions } from '../services/api'; // Função para buscar transações
import styles from '../styles/styles'; // Importa os estilos uniformes
import TransactionModal from '../components/TransactionModal'; 

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const HomeScreen = ({ route }) => {
  const { user } = route.params; 
  const [modalVisible, setModalVisible] = useState(false); 
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(user.balance); 
  
  // Função para buscar transações
  const fetchTransactions = async () => {
    try {
      const transactionData = await fetchUserTransactions(user.id); // Chame a API adequada
      setTransactions(transactionData);
    } catch (error) {
      console.error('Erro ao buscar transações:', error.message);
    }
  };

  // Atualiza o saldo local após a transação
  const updateBalance = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
  };

  // Chama a função de busca de transações quando a tela é carregada.
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Bem-vindo, {user.userName}!</Text>
      <Text style={styles.text}>Saldo: {balance}</Text>
      <Text style={styles.text}>ID do Remetente: {user.id}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Realizar Transação</Text>
      </TouchableOpacity>

      <TransactionModal 
        visible={modalVisible} 
        setVisible={setModalVisible} 
        senderId={user.id} 
        updateBalance={updateBalance} // Passa a função para atualizar o saldo 
      />

      <Text style={styles.text}>Histórico de Transações</Text>
      <FlatList 
        data={transactions} // Exibe todas as transações
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>ID da Transação: {item.id}</Text>
            <Text style={styles.transactionText}>Valor: {item.amount}</Text>
            <Text style={styles.transactionText}>Para: {item.receiverId ? item.receiverId : 'Não especificado'}</Text>
            <Text style={styles.transactionText}>Data: {formatDate(item.timestamp)}</Text>
          </View>
        )}
        initialNumToRender={3}
        style={styles.transactionList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;