import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'registrazione',
        loadChildren: () => import('./pages/registrazione/registrazione.module').then(m => m.RegistrazionePageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule), canActivateChild: [AuthGuard]
    },

    {
        path: 'nuova-partita',
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/nuova-partita/nuova-partita.module').then(m => m.NuovaPartitaPageModule),
                canActivate: [AuthGuard]

            },
        ]
    },  {
    path: 'impostazioni',
    loadChildren: () => import('./pages/impostazioni/impostazioni.module').then( m => m.ImpostazioniPageModule)
  },
  {
    path: 'giocatori/:id',
    loadChildren: () => import('./pages/giocatori/giocatori.module').then(m => m.GiocatoriPageModule), canActivate: [AuthGuard]
  },
  ]
;

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
