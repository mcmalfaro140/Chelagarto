import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import SearchComp from '../components/SearchComp'
import SearchComp2 from '../components/SearchComp2'

class SearchScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'black',
    
          },
        
    };
    render() {
        return (
        
                    <View style={styles.container}>
                        <ScrollView>
                            <SearchComp/>
                            <SearchComp2/>
                            <SearchComp/>
                            <SearchComp2/>
                        </ScrollView>
                    </View>
                );
    }
  
  }

  export default SearchScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
