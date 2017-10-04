import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitelistComponent } from './unitelist.component';

describe('UnitelistComponent', () => {
  let component: UnitelistComponent;
  let fixture: ComponentFixture<UnitelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
