import { useState } from "react";
import { View, StyleSheet, Button, Alert, Switch } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pressMe = () => {
    Alert.alert("Button Clicked!")
  }
  
  return (
    <View style={styles.container}>      
      <Button
      title="Click Me"
      onPress={pressMe}
      />
      <Switch
      value={isEnabled} 
      onValueChange={toggleSwitch}
      />
    </View>

    // <ScrollView style={styles.container}>
    //     {
    //         [...Array(40)].map((_, i) => (
    //             <Text>Hello from Home Screen {i+1} 🔥/</Text>
    //         ))
    //     }
    // </ScrollView>
  );
}