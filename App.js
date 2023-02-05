import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  return (
 
      <SafeAreaView style={styles.container}>
      <Searchbar placeholder="Search"/>
        <View style={{padding:16,backgroundColor:'green'}}>
     
        </View>
        <View style={{flex:1,padding:16, backgroundColor:'red'}}>
        <Text>Body</Text>
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontSize:50,color:'white' }}>Hello</Text>

        </View>
        </View>
        <StatusBar style='auto' />
     </SafeAreaView>

  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
