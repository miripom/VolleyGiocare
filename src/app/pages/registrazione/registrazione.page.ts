import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.page.html',
    styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
    private signUpFormModel: FormGroup;

    constructor(private navController: NavController,
                private formBuilder: FormBuilder,
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
            telefono: ['', Validators.compose([
                Validators.required
            ])],
            ruolo_preferito: [Validators.compose([
                Validators.required]
            )]
        });
    }

    onSignIn() {
        this.navController.navigateRoot('login');
    }
}
