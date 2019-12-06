import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartitePage } from './partite.page';

describe('PartitePage', () => {
  let component: PartitePage;
  let fixture: ComponentFixture<PartitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
