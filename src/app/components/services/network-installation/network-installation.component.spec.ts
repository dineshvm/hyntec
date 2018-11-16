import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInstallationComponent } from './network-installation.component';

describe('NetworkInstallationComponent', () => {
  let component: NetworkInstallationComponent;
  let fixture: ComponentFixture<NetworkInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
