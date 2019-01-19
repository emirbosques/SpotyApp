import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  singleArtist : any;
  topTrack: any;
  loading : boolean;
  constructor(private activateRoute : ActivatedRoute, private router : Router , private spotySrv : SpotifyService) {
    this.loading = true;
   }


  ngOnInit() {

    this.activateRoute.params.subscribe( data => {
      console.log('From outside',data);
      this.getArtista(data.id);
      this.getTopTrackArtista(data.id);
    });
    
  }

  getArtista(id:any){
    this.spotySrv.getSingleArtist(id).subscribe((data:any)=>{
      console.log('Single Artist', data);
      this.singleArtist = data;
      this.loading = false;
    });
  }

  getTopTrackArtista(id:any){
    this.spotySrv.getTopTracks(id).subscribe((data:any)=>{
      console.log('TOP TRACKS Single Artist', data);
      this.topTrack = data;
    });
  }
  

  goBack(){
    this.router.navigate(['/search']);
  }

  
}
