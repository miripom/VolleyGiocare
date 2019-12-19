import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiePartitePage } from './mie-partite.page';

describe('MiePartitePage', () => {
  let component: MiePartitePage;
  let fixture: ComponentFixture<MiePartitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiePartitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiePartitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
