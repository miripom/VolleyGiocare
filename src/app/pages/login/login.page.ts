import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {LoginAccount, UtenteService} from '../../services/utente.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginFormModel: FormGroup;
    private loading;

    constructor(private formBuilder: FormBuilder,
                private navController: NavController,
                private alertController: AlertController,
                private loadingCtrl: LoadingController,
                private utenteService: UtenteService) {

    }

    ngOnInit() {
        this.loginFormModel = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.required
            ])],
            password: ['', Validators.compose([
                Validators.required
            ])]
        });
    }

    onRegister() {
        this.navController.navigateRoot('registrazione');
    }

    onSignIn() {
        this.loadingCtrl.create({
            message: 'Autenticazione in corso...'
        }).then((overlay) => {
            this.loading = overlay;
            this.loading.present();
        });

        setTimeout(() => {
            this.loading.dismiss();
        }, 2000);

        const loginAccount: LoginAccount = this.loginFormModel.value;
        this.utenteService.login(loginAccount).subscribe(res => {
                this.loginFormModel.reset();
                this.utenteService.getUtente().subscribe();
                this.navController.navigateRoot('/tabs');
            },
            (err: HttpErrorResponse) => {
                if (err.status === 401) {
                    console.error('login request error: ' + err.status);
                    this.showLoginError();
                }
            });
    }

    async showLoginError() {
        const alert = await this.alertController.create({
            header: 'Attenzione',
            message: 'Email e/o Password errate',
            buttons: ['OK']
        });

        await alert.present();
    }


}
