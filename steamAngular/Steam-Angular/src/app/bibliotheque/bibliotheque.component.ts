import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { JeuxService } from '../jeux.service';
@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit, OnDestroy{

private sub:any;
id;
  constructor(public _jeuxService: JeuxService, public _categorieService: CategorieService, private route: ActivatedRoute) {

  }
  jeux = this._jeuxService.getJeux;
  categorie = this._categorieService.getCategorie;

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
