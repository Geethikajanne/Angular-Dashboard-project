import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
 
describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let comp: FormComponent;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, FormComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(FormComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create form', () => {
    expect(comp).toBeTruthy();
  });
 
  it('should enable Save only when name and valid email provided', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const nameInput = inputs[0].nativeElement as HTMLInputElement;
    const emailInput = inputs[1].nativeElement as HTMLInputElement;
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
 
    // initially disabled
    expect(button.disabled).toBeTruthy();
 
    // enter valid name and invalid email -> still disabled
    nameInput.value = 'Alice';
    nameInput.dispatchEvent(new Event('input'));
    emailInput.value = 'invalid';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(button.disabled).toBeTruthy();
 
    // enter valid email -> enabled
    emailInput.value = 'alice@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });
 
  it('should emit userAdded on save', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const nameInput = inputs[0].nativeElement as HTMLInputElement;
    const emailInput = inputs[1].nativeElement as HTMLInputElement;
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
 
    const emitted: any[] = [];
    comp.userAdded.subscribe(v => emitted.push(v));
 
    nameInput.value = 'Bob';
    nameInput.dispatchEvent(new Event('input'));
    emailInput.value = 'bob@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
 
    button.click();
    fixture.detectChanges();
 
    expect(emitted.length).toBe(1);
    expect(emitted[0].name).toBe('Bob');
    expect(emitted[0].email).toBe('bob@example.com');
  });
});