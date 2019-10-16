import React from 'react'
import {StyleSheet,View,Button,Text,Image} from 'react-native'
import data from '../helpers/filmsData'
import {getImageFromApi} from '../API/TMDB'


class FilmsItems extends React.Component{
render(){
    //console.log(this.props.films);
    const film=this.props.films
        return (

<View style={styles.main_container}>
        <Image style={styles.image,styles.imageDiv}
        source={{uri :getImageFromApi(film.backdrop_path)}}/>


    <View style={styles.blockTwo}>
        <View style={styles.contientTitreVotre}>
          <View style={styles.titreFilm}><Text>{film.original_title}</Text></View>
          <View style={styles.vote}><Text>{film.vote_average}</Text></View>
        </View>

        <View style={styles.description}><Text numberOfLines={6}>{film.overview}</Text></View>
        <View style={styles.sorti}><Text style={styles.textSorti}>Sorti le {film.release_date}</Text></View>

    </View>
</View>
            )
          }
}

const styles = StyleSheet.create({
  main_container: {
    height:50,
    marginTop:2,
    borderWidth: 0.5,
    borderColor:'red',
    height:250,

    flexDirection: 'row'

  },
  imageDiv:{
    flex:1,
    borderWidth: 0.5,
    borderColor:'red',
  },
  blockTwo:{
    flex:2,
    borderWidth: 0.5,
    borderColor:'red',
    backgroundColor:'brown',
    padding:3
  },
  contientTitreVotre:{
    borderColor:'red',
    backgroundColor:'yellow',
    flexDirection:'row'

  },
  titreFilm:{
    flex:2

  },
  vote:{
    flex:1,
  },
  description:{
    borderColor:'pink',
    backgroundColor:'pink',
    flex:2
  },
  sorti:{
    borderColor:'#e1d5e7',
    backgroundColor:'#e1d5e7',
    height:30,
  },
  textSorti:{
      marginLeft:100
  }

});

















export default FilmsItems
