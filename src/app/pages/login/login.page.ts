import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginFormModel: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private alertController: AlertController,
                private translateService: TranslateService,
                private navController: NavController) {
    }

    ngOnInit() {
        this.loginFormModel = this.formBuilder.group({
            email: ['erika', Validators.compose([
                Validators.required
            ])],
            password: ['erika', Validators.compose([
                Validators.required
            ])]
        });
    }

    onRegister() {
        this.navController.navigateRoot('registrazione');
    }

    onLogin() {
        this.navController.navigateRoot('tabs');
    }
}
