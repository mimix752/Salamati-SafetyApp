import * as Location from 'expo-location';

export const locationService = {
  requestPermission: async (): Promise<boolean> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  },

  getCurrentLocation: async (): Promise<{ latitude: number; longitude: number } | null> => {
    try {
      const hasPermission = await locationService.requestPermission();
      if (!hasPermission) {
        return null;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });

      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      };
    } catch (error) {
      console.error('Error getting location:', error);
      return null;
    }
  },

  sendSOSAlert: async (location: { latitude: number; longitude: number }) => {
    // Mock sending SOS alert
    console.log('SOS Alert sent!');
    console.log('Location:', location);
    console.log('Notifying emergency contacts...');
    console.log('Calling hotline 8350...');
    
    // In production, this would make API calls to:
    // - Send SMS to emergency contacts
    // - Call emergency hotline
    // - Send location to backend
    
    return {
      success: true,
      message: 'Alerte SOS envoyée avec succès'
    };
  }
};
