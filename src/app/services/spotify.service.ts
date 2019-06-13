import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import { map } from 'rxjs/operators';

const TOKEN =
// tslint:disable-next-line: max-line-length
'BQAKc2U2ZEx-y_tR48XvGSlXYuX8QPTdkerAtU2S2dlfr28j9YWDH6zVn4W42ipWvWzdflHQwkb9UnaYCtLWS53sZ_Mzy6Q0CWEBPoz-jvwIUtmVRNH-eh40PEqoNQM_nRee5hparTIRnwiYxSYYY7w4WbAxjRn0ldIvdsoNXFgolAvO5WYJXRCJPWztNkF21j0SIzJsd98pFFFS9gN_VaIdCM3XwJXU3Z3GbNgsMjh3Mt0fKJzQ3mDJ02RIbr2mVx6fI2E4SP8Z76ZD';
const URLBASE = 'https://api.spotify.com/v1/';
const HEADERS: HttpHeaders = new HttpHeaders({
  'Authorization': `Bearer ${TOKEN}`
});


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public newReleases: any;


  constructor(private http: HttpClient) {

    console.log(' Servicio de Spotify ');

  }

  getQuery(query: string) {
    const URL = URLBASE + query;
    return this.http.get(URL, { headers: HEADERS });
  }


  getNewReleases() {
    const QUERY = 'browse/new-releases';
    return this.getQuery(QUERY).pipe(map(data => data['albums'].items));
    /* return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers:HEADERS})
            .pipe( map (data =>  data['albums'].items )); */
  }


  getArtistas(termino: string) {

    const QUERY = `search?q=${termino}&type=artist&limit=30`;
    return this.getQuery(QUERY).pipe(map(result => result['artists'].items));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }

  getSingleArtist(id: string) {

    const QUERY = `artists/${id}`;
    return this.getQuery(QUERY); // .pipe( map( result => result['artists'].items));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }


  getTopTracks(id: string) {

    const QUERY = `artists/${id}/top-tracks?country=US`;
    return this.getQuery(QUERY).pipe(map(result => result['tracks']));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: HEADERS})
          .pipe( map( result => result['artists'].items)); */
  }


}
