import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// Exemplo de Componente Reutilizável 
const ZeusCard = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text>{description}</Text>
  </View>
);

// Telas Iniciais (Exemplo: Membros e Projetos) [cite: 17, 20]
const MembersScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Gestão de Membros</Text>
    <ZeusCard title="Chris" description="Cargo: Trainee" />
  </View>
);

const ProjectsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Projetos Ativos</Text>
    <ZeusCard title="Sistema Zeus" description="Status: Em desenvolvimento" />
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Membros" component={MembersScreen} />
        <Tab.Screen name="Projetos" component={ProjectsScreen} />
        {16}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3 }
});