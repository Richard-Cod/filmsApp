// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {getImageFromApi} from '../API/TMDB'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
<View style={styles.main_container}>
  <View style={styles.gauche}>

  <Image
   source={{uri :getImageFromApi(film.poster_path)}} style={styles.image} />
  </View>

  <View style={styles.droite}>
    <View style={styles.titreetvote}>
      <Text style={styles.title_text}>{film.title}</Text>
      <Text style={styles.vote}>{film.vote_average}</Text>

    </View>

    <View style={styles.desc}>
        <Text numberOfLines={6} style={styles.description}>{film.overview}</Text>
    </View>

    <View style={styles.sort}>
        <Text style={styles.sortie}>Sort le {film.release_date}</Text>
    </View>

  </View>



</View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    padding:4,
    borderColor:'black',
    borderWidth:2
  },
  image: {
    width:120,
    height:200

  },
  titreetvote: {
    flexDirection:'row',
    backgroundColor:'white'


  },
  desc: {
    flex:4,
    flexDirection:'row',
    marginTop:10,


  },
  sortie: {
    marginLeft:135,
    marginTop:20
  },
  description: {

  },
  vote: {
    fontWeight:"bold",
    position:'absolute',
    left:245



  },
  gauche: {
    flex:1,
    //backgroundColor:'#6c6b6c',
  },
  droite: {
    flex:2,


  },
  title_text: {
    fontWeight:"bold"

  }
})

export default FilmItem
