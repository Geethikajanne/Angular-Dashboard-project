import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let comp: DashboardComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, DashboardComponent, FormComponent, TableComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create dashboard', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should add user when form emits userAdded', () => {
    comp.onAddUser({ name: 'Test', email: 'test@x.com' });
    expect(comp.users.length).toBe(1);
    expect(comp.users[0].name).toBe('Test');
  });
 
  it('should update preview on userTyping', () => {
    comp.onUserTyping({ name: 'Preview', email: 'p@x.com' });
    expect(comp.previewUser).toBeTruthy();
    expect(comp.previewUser!.name).toBe('Preview');
  });
});
 