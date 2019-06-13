import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public artistasResult: any;
  loading: boolean;

  constructor( private spotiSrv: SpotifyService) {}

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotiSrv.getArtistas(termino).subscribe((result: any) => {
      console.log('Result::', result);
      this.artistasResult = result;
      this.loading = false;
    });
  }

}
