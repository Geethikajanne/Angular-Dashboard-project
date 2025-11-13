import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
 
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HeaderComponent, FooterComponent, DashboardComponent, AppComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create app', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should include header and footer', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-header')).not.toBeNull();
    expect(el.querySelector('app-footer')).not.toBeNull();
  });
 
  it('should render dashboard inside main', () => {
    const main = fixture.nativeElement.querySelector('main');
    expect(main?.querySelector('app-dashboard')).not.toBeNull();
  });
});
 