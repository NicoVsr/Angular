import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoyenneComponent } from './moyenne/moyenne.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxService } from './jeux.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieService } from './categorie.service';
@NgModule({
  declarations: [
    AppComponent,
    MoyenneComponent,
    JeuxComponent,
    HeaderComponent,
    FooterComponent,
    BibliothequeComponent,
    HomeComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'bibliotheque',
        component: BibliothequeComponent
      },
      {
        path: 'jeux/:id',
        component: JeuxComponent
      }
    ])

  ],
  providers: [JeuxService, CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
