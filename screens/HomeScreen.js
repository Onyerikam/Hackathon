// HomeScreen.js
import React from 'react';
import { View } from 'react-native';
import NetworkList from '../components/NetworkList';
import PasswordInput from '../components/PasswordInput';
import ConnectedNetwork from '../components/ConnectedNetwork';
import DataUsage from '../components/DataUsage';

class HomeScreen extends React.Component {
  state = {
  networks: [],
  selectedNetwork: null,
  password: null,
  isConnected: false,
  connectedNetwork: null,
  dataUsage: 0,
  dataLimit: 0,
};

componentDidMount() {
  this.fetchNetworks();
  this.fetchDataUsage();
  this.fetchDataLimit();
  this.fetchConnectedNetwork();
}

fetchNetworks = async () => {
  const networks = await NetworkScanner.scanAsync();
  this.setState({ networks });
}

fetchDataUsage = async () => {
  const dataUsage = await DataUsageService.fetchDataUsageAsync();
  this.setState({ dataUsage });
}

fetchDataLimit = async () => {
  const dataLimit = await DataUsageService.fetchDataLimitAsync();
  this.setState({ dataLimit });
}

fetchConnectedNetwork = async () => {
  const connectedNetwork = await NetworkScanner.getConnectedNetworkAsync();
  this.setState({ connectedNetwork, isConnected: true });
}

handleNetworkPress = (network) => {
  this.setState({ selectedNetwork: network });
}

handlePasswordChange = (password) => {
  this.setState({ password });
}

handlePasswordSubmit = async () => {
  const { selectedNetwork, password } = this.state;
  await NetworkPasswordFetcher.connectToNetworkAsync(selectedNetwork, password);
  this.setState({ isConnected: true, connectedNetwork: selectedNetwork });
}
render() {
  const {
    networks,
    selectedNetwork,
    isConnected,
    connectedNetwork,
    dataUsage,
    dataLimit,
  } = this.state;

  return (
    <View>
      {!isConnected && (
        <NetworkList networks={networks} onPress={this.handleNetworkPress} />
      )}
      {selectedNetwork && !isConnected && (
        <PasswordInput onChange={this.handlePasswordChange} onSubmit={this.handlePasswordSubmit} />
      )}
      {isConnected && (
        <ConnectedNetwork network={connectedNetwork} />
      )}
      <DataUsage usage={dataUsage} limit={dataLimit} />
    </View>
  );
 }      
}

export default HomeScreen;
