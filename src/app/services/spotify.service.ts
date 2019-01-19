import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import {map} from 'rxjs/operators';

const TOKEN = 'BQBRtPVkpVQz-IzdTvilZbgwzksfP5vd8oMwtZ-M2-l2fAMss1vZxpsnjO7Mue6on6B88jDED8V73LOFMYM';
const URLBASE = 'https://api.spotify.com/v1/';
const HEADERS: HttpHeaders = new HttpHeaders({
  'Authorization': `Bearer ${TOKEN}`
})


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public newReleases: any;

  
  constructor(private http : HttpClient) {

    console.log(' Servicio de Spotify ');

  }

  getQuery(query : string){
    const URL = URLBASE+query;
    return this.http.get(URL, {headers:HEADERS});
  }


  getNewReleases() {
      const QUERY = 'browse/new-releases';
      return this.getQuery(QUERY).pipe( map (data =>  data['albums'].items ));
    /* return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers:HEADERS})
            .pipe( map (data =>  data['albums'].items )); */
  }


  getArtistas(termino: string){

    const QUERY = `search?q=${termino}&type=artist&limit=30`;
      return this.getQuery(QUERY).pipe( map( result => result['artists'].items));
   
    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }

  getSingleArtist(id: string){

    const QUERY = `artists/${id}`;
      return this.getQuery(QUERY); //.pipe( map( result => result['artists'].items));
   
    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }


  getTopTracks(id: string){

    const QUERY = `artists/${id}/top-tracks?country=US`;
      return this.getQuery(QUERY).pipe( map( result => result['tracks']));
   
    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }


}
