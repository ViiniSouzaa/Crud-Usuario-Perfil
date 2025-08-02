import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisForm } from './perfis-form';

describe('PerfisForm', () => {
  let component: PerfisForm;
  let fixture: ComponentFixture<PerfisForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfisForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfisForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
