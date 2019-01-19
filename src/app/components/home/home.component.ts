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
  loading: boolean;

  constructor( private spotySrv: SpotifyService ) { 
    this.loading = true;
  }

  ngOnInit() {
    this.spotySrv.getNewReleases().subscribe( (data: any) => {
      console.log('New Releases 2', data);
        this.loading = false;
        this.newReleases = data;
    });
  }

}
