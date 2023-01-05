// AdvancedSettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Switch from '../components/Switch.js';

class AdvancedSettingsScreen extends React.Component {
    state = {
        wifiEnabled: true,
        bluetoothEnabled: false,
        isHotspotEnabled: false,
        isVPNConnected: false,
        isProxyConnected: false,
        blockedWebsites: [],
        darkModeEnabled: false,
        wifiSleepSchedule: {},
        wifiPrioritization: [],
        dataUsageWarningThreshold: 0,
        wifiAutoConnectEnabled: false,
        wifiAutoDisconnectEnabled: false,
        dataSaverEnabled: false,
        wifiQuickConnect: [],
        wifiScanFrequency: 0,
        maliciousNetworkDetectionEnabled: false,
        phishingNetworkDetectionEnabled: false,
    };
        
    componentDidMount() {
        this.fetchWiFiStatus();
        this.fetchBluetoothStatus();
        this.fetchHotspotStatus();
        this.fetchVPNStatus();
        this.fetchProxyStatus();
        this.fetchBlockedWebsites();
        this.fetchDarkModeStatus();
        this.fetchWiFiSleepSchedule();
        this.fetchWiFiPrioritization();
        this.fetchDataUsageWarningThreshold();
        this.fetchWiFiAutoConnectStatus();
        this.fetchWiFiAutoDisconnectStatus();
        this.fetchDataSaverStatus();
        this.fetchWiFiQuickConnect();
        this.fetchWiFiScanFrequency();
        this.fetchMaliciousNetworkDetectionStatus();
        this.fetchPhishingNetworkDetectionStatus();
    }
        
    fetchWiFiStatus = async () => {
        const wifiEnabled = await WiFiService.isEnabledAsync();
        this.setState({ wifiEnabled });
    }
    fetchBluetoothStatus = async () => {
        const bluetoothEnabled = await BluetoothService.isEnabledAsync();
        this.setState({ bluetoothEnabled });
    }
        
    fetchHotspotStatus = async () => {
        const isHotspotEnabled = await WiFiHotspotService.isEnabledAsync();
        this.setState({ isHotspotEnabled });
    }
        
    fetchVPNStatus = async () => {
        const isVPNConnected = await VPNService.isConnectedAsync();
        this.setState({ isVPNConnected });
    }
        
    fetchProxyStatus = async () => {
        const isProxyConnected = await ProxyService.isConnectedAsync();
        this.setState({ isProxyConnected });
    }
        
    fetchBlockedWebsites = async () => {
        const blockedWebsites = await WebsiteBlockerService.getBlockedWebsitesAsync();
        this.setState({ blockedWebsites });
    }
        
    fetchDarkModeStatus = async () => {
        const darkModeEnabled = await AppAppearanceService.isDarkModeEnabledAsync();
        this.setState({ darkModeEnabled });
    }
        
    fetchWiFiSleepSchedule = async () => {
        const wifiSleepSchedule = await WiFiSleepService.getScheduleAsync();
        this.setState({ wifiSleepSchedule });
    }
        
    fetchWiFiPrioritization = async () => {
        const wifiPrioritization = await WiFiPrioritizationService.getListAsync();
        this.setState({ wifiPrioritization });
    }
        
    fetchDataUsageWarningThreshold = async () => {
        const dataUsageWarningThreshold = await DataUsageService.getWarningThresholdAsync();
        this.setState({ dataUsageWarningThreshold });
    }
        
    fetchWiFiAutoConnectStatus = async () => {
        const wifiAutoConnectEnabled = await WiFiAutoConnectService.isEnabledAsync();
        this.setState({ wifiAutoConnectEnabled });
    }
        
    fetchWiFiAutoDisconnectStatus = async () => {
        const wifiAutoDisconnectEnabled = await WiFiAutoDisconnectService.isEnabledAsync();
        this.setState({ wifiAutoDisconnectEnabled });
    }

    fetchDataSaverStatus = async () => {
        const dataSaverEnabled = await DataSaverService.isEnabledAsync();
        this.setState({ dataSaverEnabled });
    }
            
    fetchWiFiQuickConnect = async () => {
        const wifiQuickConnect = await WiFiQuickConnectService.getListAsync();
        this.setState({ wifiQuickConnect });
    }
            
    fetchWiFiScanFrequency = async () => {
        const wifiScanFrequency = await WiFiScanFrequencyService.getFrequencyAsync();
        this.setState({ wifiScanFrequency });
    }
            
    fetchMaliciousNetworkDetectionStatus = async () => {
        const maliciousNetworkDetectionEnabled = await MaliciousNetworkDetectionService.isEnabledAsync();
        this.setState({ maliciousNetworkDetectionEnabled });
    }
            
    fetchPhishingNetworkDetectionStatus = async () => {
        const phishingNetworkDetectionEnabled = await PhishingNetworkDetectionService.isEnabledAsync();
        this.setState({ phishingNetworkDetectionEnabled });
    }
            
    handleWiFiToggle = async (value) => {
        await WiFiService.setEnabledAsync(value);
        this.setState({ wifiEnabled: value });
    }
            
    handleBluetoothToggle = async (value) => {
        await BluetoothService.setEnabledAsync(value);
        this.setState({ bluetoothEnabled: value });
    }

    handleHotspotToggle = async (value) => {
        await WiFiHotspotService.setEnabledAsync(value);
        this.setState({ isHotspotEnabled: value });
    }
            
    handleVPNToggle = async (value) => {
        if (value) {
          await VPNService.connectAsync();
        } else {
          await VPNService.disconnectAsync();
        }
        this.setState({ isVPNConnected: value });
    }
            
    handleProxyToggle = async (value) => {
        if (value) {
            await ProxyService.connectAsync();
        } else {
            await ProxyService.disconnectAsync();
        }
        this.setState({ isProxyConnected: value });
    }
            
    handleBlockedWebsitesChange = (blockedWebsites) => {
        this.setState({ blockedWebsites });
    }
            
    handleBlockedWebsitesSubmit = async () => {
        const { blockedWebsites } = this.state;
        await WebsiteBlockerService.setBlockedWebsitesAsync(blockedWebsites);
    }
            
    handleDarkModeToggle = async (value) => {
        await AppAppearanceService.setDarkModeAsync(value);
        this.setState({ darkModeEnabled: value });
    }
            
    handleWiFiSleepScheduleChange = (wifiSleepSchedule) => {
        this.setState({ wifiSleepSchedule });
    }
            
    handleHotspotToggle = async (value) => {
        await WiFiHotspotService.setEnabledAsync(value);
        this.setState({ isHotspotEnabled: value });
    }
            
    handleVPNToggle = async (value) => {
        if (value) {
          await VPNService.connectAsync();
        } else {
          await VPNService.disconnectAsync();
        }
        this.setState({ isVPNConnected: value });
    }
            
    handleProxyToggle = async (value) => {
        if (value) {
          await ProxyService.connectAsync();
        } else {
          await ProxyService.disconnectAsync();
        }
        this.setState({ isProxyConnected: value });
        }
            
    handleBlockedWebsitesChange = async (blockedWebsites) => {
        await WebsiteBlockerService.setBlockedWebsitesAsync(blockedWebsites);
        this.setState({ blockedWebsites });
    }
            
    handleDarkModeToggle = async (value) => {
        await AppAppearanceService.setDarkModeEnabledAsync(value);
        this.setState({ darkModeEnabled: value });
    }
            
    handleWiFiSleepScheduleChange = async (wifiSleepSchedule) => {
        await WiFiSleepService.setScheduleAsync(wifiSleepSchedule);
        this.setState({ wifiSleepSchedule });
    }
            
    handleWiFiPrioritizationChange = async (wifiPrioritization) => {
        await WiFiPrioritizationService.setListAsync(wifiPrioritization);
        this.setState({ wifiPrioritization });
    }

    handleDataUsageWarningThresholdChange = async (dataUsageWarningThreshold) => {
        await DataUsageService.setWarningThresholdAsync(dataUsageWarningThreshold);
        this.setState({ dataUsageWarningThreshold });
    }
            
    handleWiFiAutoConnectToggle = async (value) => {
        await WiFiAutoConnectService.setEnabledAsync(value);
        this.setState({ wifiAutoConnectEnabled: value });
    }
            
    handleWiFiAutoDisconnectToggle = async (value) => {
        await WiFiAutoDisconnectService.setEnabledAsync(value);
        this.setState({ wifiAutoDisconnectEnabled: value });
    }
            
    handleDataSaverToggle = async (value) => {
        await DataSaverService.setEnabledAsync(value);
        this.setState({ dataSaverEnabled: value });
    }
            
    handleWiFiQuickConnectChange = async (wifiQuickConnect) => {
        await WiFiQuickConnectService.setListAsync(wifiQuickConnect);
        this.setState({ wifiQuickConnect });
    }
            
    handleWiFiScanFrequencyChange = async (wifiScanFrequency) => {
        await WiFiScanFrequencyService.setFrequencyAsync(wifiScanFrequency);
        this.setState({ wifiScanFrequency });
    }