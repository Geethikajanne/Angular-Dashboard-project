import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
 
describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let comp: FooterComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FooterComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create footer component', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should contain a footer element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer')).not.toBeNull();
  });
 
  it('should display current year and copyright text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerText = compiled.textContent?.toLowerCase() || '';
    expect(footerText).toContain(new Date().getFullYear().toString());
    expect(footerText).toContain('all rights reserved');
  });
});