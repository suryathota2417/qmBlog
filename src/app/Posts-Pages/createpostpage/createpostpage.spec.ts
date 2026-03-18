import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createpostpage } from './createpostpage';

describe('Createpostpage', () => {
  let component: Createpostpage;
  let fixture: ComponentFixture<Createpostpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createpostpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createpostpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
