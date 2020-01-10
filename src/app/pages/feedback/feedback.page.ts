import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
    private votazioneFormModel: FormGroup;
    private color: any = {color1: '', color2: '', color3: '', color4: '', color5: ''};

    constructor(private formBuilder: FormBuilder, private modalController: ModalController) {
    }

    ngOnInit() {

        this.votazioneFormModel = this.formBuilder.group({
            commento: ['', Validators.compose([
                Validators.required
            ])],
        });
    }

   async chiudiModal() {
       await this.modalController.dismiss();
    }

    starUno(event) {
        this.color.color1 = 'primary';
        this.color.color2 = '';
        this.color.color3 = '';
        this.color.color4 = '';
        this.color.color5 = '';
    }

    starDue(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = '';
        this.color.color4 = '';
        this.color.color5 = '';
    }

    starTre(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = '';
        this.color.color5 = '';
    }

    starQuattro(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = 'primary';
        this.color.color5 = '';
    }

    starCinque(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = 'primary';
        this.color.color5 = 'primary';
    }
}
