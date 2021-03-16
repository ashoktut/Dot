import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rest1Page } from './rest1.page';

describe('Rest1Page', () => {
  let component: Rest1Page;
  let fixture: ComponentFixture<Rest1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rest1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rest1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
