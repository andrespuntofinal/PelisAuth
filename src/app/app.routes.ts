import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';

export const ROUTES: Routes = [
    { path: 'main', component: MainComponent},
    { path: 'search', component: SearchComponent},
    { path: '', pathMatch: 'full', redirectTo: 'main'},
    { path: '**', pathMatch: 'full', redirectTo: 'main'}

];