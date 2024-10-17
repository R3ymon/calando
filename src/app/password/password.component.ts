import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {}
