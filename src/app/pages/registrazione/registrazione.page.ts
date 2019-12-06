import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {HttpErrorResponse} from '@angular/common/http';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {TipologiaRuolo} from '../../model/tipologiaRuolo.model';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.page.html',
    styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
    private signUpFormModel: FormGroup;

    constructor(private navController: NavController,
                private formBuilder: FormBuilder,
                private utenteService: UtenteService,
                private alertController: AlertController,
    ) {
    }

    ngOnInit() {
        this.signUpFormModel = this.formBuilder.group({
            nome: ['', Validators.compose([
                Validators.required
            ])],
            cognome: ['', Validators.compose([
                Validators.required
            ])],
            email: ['', Validators.compose([
                Validators.required, Validators.email
            ])],
            password: ['', Validators.compose([
                Validators.required
            ])],
            ruolo: [Validators.compose([
                Validators.required]
            )],
            telefono: ['', Validators.compose([
                Validators.required
            ])],

        });
    }

    onSignUp() {
        const account: Utente = this.signUpFormModel.value;
        account.ruolo = new TipologiaRuolo();
        account.ruolo.nome_ruolo = this.signUpFormModel.get('ruolo').value;
        console.log(account.ruolo.nome_ruolo);

        this.utenteService.signUp(account).subscribe(() => {
                this.signUpFormModel.reset();
                this.navController.navigateRoot('/login');
            },
            (err: HttpErrorResponse) => {
                if (err.status === 401) {
                    console.error('login request error: ' + err.status);
                    this.showLoginError(err.error, 'error');
                }
                if (err.status === 501) {
                    console.error('login request error: ' + err.status);
                    this.showLoginError(err.error, 'error');
                }
                if (err.status === 500) {
                    console.error('login request error: ' + err.status);
                    this.showLoginError(err.error, 'error');
                }
                if (err.ok) {
                    console.log('OK');
                }


            }
        );
    }

    async showLoginError(errMessage, header) {
        const alert = await this.alertController.create({
            header,
            message: errMessage,
            buttons: ['OK']
        });

        await alert.present();
    }

    onLogin() {
        this.navController.navigateRoot('login');
    }
}
