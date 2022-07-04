import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManaureComponent } from './manaure.component';


describe('BlogDetailComponent', () => {
  let component: ManaureComponent;
  let fixture: ComponentFixture<ManaureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManaureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
