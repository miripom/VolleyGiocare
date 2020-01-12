import {NgModule} from '@angular/core';
import {DettaglioPartitaComponent} from './dettaglio-partita.component';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [DettaglioPartitaComponent],
    exports: [DettaglioPartitaComponent],
    imports: [
        TranslateModule,
        IonicModule,
        CommonModule
    ]
})
export class ComponentModule {
}
