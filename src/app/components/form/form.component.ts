import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name = '';
  email = '';
  emailError = '';
 
  @Output() userAdded = new EventEmitter<{ name: string; email: string }>();
  @Output() userTyping = new EventEmitter<{ name: string; email: string }>();
 
  // safe email regex (hyphen placed last in class)
  isValidEmail(email: string): boolean {
    if (!email) return false;
    const regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email.trim());
  }
 
  onTyping() {
    // emit current values for preview
    this.userTyping.emit({ name: this.name, email: this.email });
 
    // update inline error while typing (optional UX)
    if (!this.email) {
      this.emailError = '';
    } else if (!this.isValidEmail(this.email)) {
      this.emailError = 'Invalid email format';
    } else {
      this.emailError = '';
    }
  }
 
  onSave() {
    // final validation on save
    if (!this.name.trim()) {
      this.emailError = 'Please enter a name.';
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.emailError = 'Please enter a valid email address.';
      return;
    }
 
    // emit trimmed values and reset
    this.userAdded.emit({ name: this.name.trim(), email: this.email.trim() });
    this.name = '';
    this.email = '';
    this.emailError = '';
    this.userTyping.emit({ name: '', email: '' }); // clear preview
  }
}
 