import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
 
describe('TableComponent', () => {
  let fixture: ComponentFixture<TableComponent>;
  let comp: TableComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, TableComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(TableComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create table component', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should not show preview when previewUser empty', () => {
    comp.previewUser = null;
    fixture.detectChanges();
    const previewRow = fixture.debugElement.query(By.css('tbody tr'));
    // If no users and no preview, there may be a "No users" row — we only assert preview not present
    const previewPresent = fixture.nativeElement.querySelector('tbody tr[style*="italic"], tbody tr[style*="background"]');
    expect(previewPresent).toBeNull();
  });
 
  it('should list users', () => {
    comp.users = [{ name: 'A', email: 'a@a.com' }, { name: 'B', email: 'b@b.com' }];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const allText = Array.from(rows).map((r: any) => r.textContent).join(' ');
    expect(allText).toContain('A');
    expect(allText).toContain('B');
  });
 
  it('should show preview row when previewUser has content', () => {
    comp.previewUser = { name: 'Preview', email: 'p@x.com' };
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const firstRowText = rows[0].textContent || '';
    expect(firstRowText).toContain('Preview');
  });
});