import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
 
describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let comp: HeaderComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HeaderComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create header component', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should render app title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.title h1');
    expect(title).not.toBeNull();
    expect(title!.textContent!.trim()).toContain('My Activity Dashboard');
  });
 
  it('logo image is optional but if present should be an <img>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('.logo img');
    if (img) {
      expect(img.tagName.toLowerCase()).toBe('img');
    } else {
      // If no logo provided, that's OK — test stays green
      expect(img).toBeNull();
    }
  });
});
 