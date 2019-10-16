import React from 'react'
import {StyleSheet,View,Button,TextInput,FlatList} from 'react-native'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB'
import FilmsItems from './fitem';


class Search extends React.Component{
  constructor(props) {
   super(props)
   this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
   this.state = {
     films: []
   }
 }

  _loadFilms() {
  if (this.searchedText.length > 0) {
    getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
      this.setState({ films: data.results })
    })
    console.log(this.state)
   }
 }
 _searchTextInputChanged(text){
   this.searchedText = text
 }
render(){
  console.log("render");
        return (
        	<View style={styles.main_container}>
        	<TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textInputStyle} placeholder="Entrer le titre du film"/>
        	<Button title="Rechercher" onPress={() => {this._loadFilms()}}/>
          <FlatList
              data = {this.state.films}
              keyExtractor= {(item) => item.id.toString()}
              renderItem ={({item}) => <FilmsItems films={item} />}
          />
        	</View>

            )
          }
}

export default Search

const styles = StyleSheet.create({
  main_container: {
    marginTop:25,
    borderWidth: 0.5,
    borderColor:'red'
  },
  textInputStyle:{
    alignItems:'center'
  }
});
