import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: { name: string; email: string }[] = [];
  previewUser: { name: string; email: string } | null = null;
 
  onAddUser(user: { name: string; email: string }) {
    // Add trimmed values
    this.users.push({ name: user.name.trim(), email: user.email.trim() });
    // clear preview
    this.previewUser = null;
  }
 
  onUserTyping(user: { name: string; email: string }) {
    // If both name and email empty, null the preview to hide row
    if (!(user.name?.trim() || user.email?.trim())) {
      this.previewUser = null;
      return;
    }
    // otherwise update preview
    this.previewUser = { name: user.name, email: user.email };
  }
}
 