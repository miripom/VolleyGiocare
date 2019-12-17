import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovaPartitaPage } from './nuova-partita.page';

describe('NuovaPartitaPage', () => {
  let component: NuovaPartitaPage;
  let fixture: ComponentFixture<NuovaPartitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaPartitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovaPartitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
