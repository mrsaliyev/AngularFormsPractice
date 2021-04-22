import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartIiComponent } from './part-ii.component';

describe('PartIiComponent', () => {
  let component: PartIiComponent;
  let fixture: ComponentFixture<PartIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
