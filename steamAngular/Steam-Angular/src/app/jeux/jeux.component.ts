import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../jeux.service';


@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css','./coeur.jpg','./coeur2.png']
})
export class JeuxComponent implements OnInit, OnDestroy{
  private sub:any;
id;
  constructor(public _jeuxService: JeuxService, private route: ActivatedRoute) {

  }
  jeux = this._jeuxService.getJeux;


  ngOnInit()
  {
  this.sub = this.route.params.subscribe(params =>{
    this.id = params['id'];
  })
  }
  ngOnDestroy()
  {

  }
}
