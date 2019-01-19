import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[] = [];

  constructor( private router : Router) { }

  ngOnInit() {
  }

  openArtist( item : any){
    let idType;
    if (item.type === 'artist'){
      idType = item.id;
    }
    else{
      idType = item.artists[0].id;
    }
    this.router.navigate(['/artist', idType]);
    console.log(idType);
  }

}
