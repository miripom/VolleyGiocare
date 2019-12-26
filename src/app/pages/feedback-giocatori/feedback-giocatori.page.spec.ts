import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackGiocatoriPage } from './feedback-giocatori.page';

describe('FeedbackGiocatoriPage', () => {
  let component: FeedbackGiocatoriPage;
  let fixture: ComponentFixture<FeedbackGiocatoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackGiocatoriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackGiocatoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
