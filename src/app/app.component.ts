import {Component, OnInit} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from './model/utente.model';
import {LinguaService} from './services/lingua.service';
import {UtenteService} from './services/utente.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    private utente$: BehaviorSubject<Utente>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateService,
        private linguaService: LinguaService,
        private utenteService: UtenteService,
        private navController: NavController,
    ) {
        this.initializeApp();
    }


    public appPages = [
        {
            title: 'IMPOSTAZIONI',
            url: '/settings',
            icon: 'settings'
        },

    ];

    ngOnInit(): void {
        this.utente$ = this.utenteService.getUtente();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.initTranslate();
        });
    }

    initTranslate() {
        this.translate.setDefaultLang('it');
        this.translate.use('it');
        // Set the default language for translation strings, and the current language.
        const linguaPreferita = this.linguaService.getLinguaPreferita();
        this.translate.setDefaultLang(linguaPreferita);
        this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
            if (lingua != null) {
                this.translate.use(lingua);
            } else {
                this.translate.use(linguaPreferita);
                this.linguaService.updateLingua(linguaPreferita);
            }
        });
    }

    logout() {
        this.utenteService.logout();
        this.navController.navigateRoot('login');
    }

}
