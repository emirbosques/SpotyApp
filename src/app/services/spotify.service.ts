import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public newReleases: any;
  // tslint:disable-next-line:typedef-whitespace
  constructor(private http : HttpClient) {

    console.log(' Servicio de Spotify ');

  }

  getNewReleases() {
    const HEADERS = new HttpHeaders ({
      'Authorization': 'Bearer BQChls6FhMnN9LZxYDuNo6oGVny9TvNQgwDh99XyMvrSj-2t8923ea6Q3HNOxUphA6erCqtpg1JHcpIFFoo'
    });
    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers: HEADERS});
  }
}
