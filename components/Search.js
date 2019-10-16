import React from 'react'
import {StyleSheet,View,Button,TextInput,FlatList,ActivityIndicator} from 'react-native'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB'
import FilmsItems from './fitem';


class Search extends React.Component{
  constructor(props) {
   super(props)
   this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
   this.state = {
     films: [],
     isloading: false
   }
 }

  _loadFilms() {
  if (this.searchedText.length > 0) {
    this.setState({isloading:true})
    getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
      this.setState({
         films: data.results,
         isloading: false})
    })

   }

 }
 _searchTextInputChanged(text){
   this.searchedText = text
 }
 _chargement(){
   if (this.state.isloading === true) {
         return (
           <View style={styles.chargeur}>
                 <ActivityIndicator size="large" color="red" />
           </View>
         );

   }
 }
render(){
  console.log(this.state.isloading)

        return (
        	<View style={styles.main_container}>
        	<TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textInputStyle} placeholder="Entrer le titre du film"/>
        	<Button title="Rechercher" onPress={() => {this._loadFilms()}}/>
          <FlatList
              data = {this.state.films}
              keyExtractor= {(item) => item.id.toString()}
              renderItem ={({item}) => <FilmsItems films={item} />}
          />
            {this._chargement()}
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
  },
  chargeur:{
    position:'absolute',
    top:100,
    left:0,
    right:0,
    alignItems:'center',
    justifyContent:'center'}
});
