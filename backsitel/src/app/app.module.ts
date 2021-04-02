import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginadminComponent } from './composant/loginadmin/loginadmin.component';
import { OffreFormComponent } from './composant/offre-form/offre-form.component';
import { ListeOffreAdminComponent } from './composant/liste-offre-admin/liste-offre-admin.component';
import { ClientstatComponent } from './composant/clientstat/clientstat.component';
import { OffrestatComponent } from './composant/offrestat/offrestat.component';
import { GainstatComponent } from './composant/gainstat/gainstat.component';
import { StatistiqueComponent } from './page/statistique/statistique.component';
import { ValidationComponent } from './page/validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginadminComponent,
    OffreFormComponent,
    ListeOffreAdminComponent,
    ClientstatComponent,
    OffrestatComponent,
    GainstatComponent,
    StatistiqueComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
