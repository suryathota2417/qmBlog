import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postdetailspage } from './postdetailspage';

describe('Postdetailspage', () => {
  let component: Postdetailspage;
  let fixture: ComponentFixture<Postdetailspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postdetailspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postdetailspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
