import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeOffreAdminComponent } from './composant/liste-offre-admin/liste-offre-admin.component';
import { LoginadminComponent } from './composant/loginadmin/loginadmin.component';
import { OffreFormComponent } from './composant/offre-form/offre-form.component';
import { StatistiqueComponent } from './page/statistique/statistique.component';
import { ValidationComponent } from './page/validation/validation.component';
import { ClientstatComponent } from './composant/clientstat/clientstat.component';
//import { DetailsFormComponent} from './composant/details-form/details-form.component';
const routes: Routes = [{ path: '', component: LoginadminComponent },
{ path: 'OffreForm', component: OffreFormComponent },
{ path: 'ListeOffre',component: ListeOffreAdminComponent },
{ path: 'Statistiques',component: StatistiqueComponent},
{ path: 'DepotEnAttente',component: ValidationComponent},
{ path: 'ClientStat',component:ClientstatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
