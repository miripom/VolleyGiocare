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
    path: 'dettaglio-partita/:id',
    loadChildren: () => import('./pages/dettaglio-partita/dettaglio-partita.module').then( m => m.DettaglioPartitaPageModule),
      canActivate: [AuthGuard]
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
  }
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
