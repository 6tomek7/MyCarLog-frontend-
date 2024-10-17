import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAdressComponent } from './wrong-adress.component';

describe('WrongAdressComponent', () => {
  let component: WrongAdressComponent;
  let fixture: ComponentFixture<WrongAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
