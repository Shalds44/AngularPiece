import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabaneComponent } from './cabane.component';

describe('CabaneComponent', () => {
  let component: CabaneComponent;
  let fixture: ComponentFixture<CabaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
