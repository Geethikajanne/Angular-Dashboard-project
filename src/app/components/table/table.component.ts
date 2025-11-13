import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() users: { name: string; email: string }[] = [];
  @Input() previewUser?: { name: string; email: string } | null = null;
}