// App.tsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import RegistrationPage from 'C:\LiveAi-Acedemy\App\LiveAI\screens\RegistrationPage.tsx'; // Import your registration page

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      {/* Render the Registration Page */}
      <RegistrationPage />
    </SafeAreaView>
  );
};

export default App;
