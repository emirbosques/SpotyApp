import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public newReleases: any;
  constructor( private spotySrv: SpotifyService ) { }

  ngOnInit() {
    this.spotySrv.getNewReleases().subscribe( (data: any) => {
      console.log('New Releases 2', data.albums.items);
      this.newReleases = data.albums.items;
    });
  }

}
