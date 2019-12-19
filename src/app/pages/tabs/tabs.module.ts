import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'partite',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../partite/partite.module').then(m => m.PartitePageModule),

                    }
                    ,
                ]
            },

            {
                path: '',
                redirectTo: '/tabs/partite',
                pathMatch: 'full'
            }
        ]
    }];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // TabsPageRoutingModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)

    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
