import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingFormComponent } from './user-setting-form.component';

describe('UserSettingFormComponent', () => {
  let component: UserSettingFormComponent;
  let fixture: ComponentFixture<UserSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
