import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FilmsPopulairesComponent } from './films-populaires/films-populaires.component';
import { HomeComponent } from './home/home.component';
import { RechercheComponent } from './recherche/recherche.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films-populaires',      component: FilmsPopulairesComponent },
  { path: 'recherche',      component: RechercheComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},//page d'accueil redirect
  {path:'**', redirectTo:'home',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FilmsPopulairesComponent,
    HomeComponent,
    RechercheComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


