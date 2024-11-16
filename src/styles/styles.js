// styles/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  transactionItem: {
    backgroundColor: 'white',
    padding: 10, // Ajuste para o mesmo size dos outros botões
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    width: '100%',
  },  
  transactionList: {
    maxHeight: 200, // Limita a altura da lista de histórico para não ocupar espaço excessivo
    width: '100%', // Ocupa toda a largura do contêiner
    marginBottom: 20, // Margem para espaçar do final da tela
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 16,
    backgroundColor: '#f5f5f5', // Cor de fundo leve para melhor contraste
  },
  formContainer: {
    width: '90%', // Usar uma largura fixada para maior responsividade
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc', // Cor da borda
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    paddingRight: 40,
    backgroundColor: 'white', // Fundo branco para o input
  },
  text: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333', // Cor do texto mais escura para melhor legibilidade
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde do botão
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%', // O botão ocupará a largura do contêiner
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,  // Posiciona o ícone de olho no centro vertical do input
  },
  logo: {
    width: 160,
    height: 45,
    alignSelf: 'center',
    marginBottom: 20,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%', // Assegura que o contêiner da senha tenha a largura correta
  },
});

export default styles;