import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = ''; // Definir la propiedad email
  password: string = ''; // Definir la propiedad password

  // Función para manejar el evento de inicio de sesión
  async onLogin() {
    try {
      const response = await axios.post('http://localhost:3000/save-data', {
        email: this.email,
        password: this.password,
      });
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
}
