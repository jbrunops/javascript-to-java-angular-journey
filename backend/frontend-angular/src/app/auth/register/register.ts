// Copie e cole este conteúdo completo em: src/app/auth/register/register.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ferramenta para formulários

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  onSubmit() {
    console.log('Formulário enviado com sucesso!');
    console.log('Dados coletados:', {
      name: this.name,
      email: this.email,
      password: this.password
    });
  }
}
