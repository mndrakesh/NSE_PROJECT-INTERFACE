import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterfileComponent } from './masterfile.component';

describe('MasterfileComponent', () => {
  let component: MasterfileComponent;
  let fixture: ComponentFixture<MasterfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterfileComponent]
    });
    fixture = TestBed.createComponent(MasterfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
