// Copie e cole este conteúdo completo em: src/app/app.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './auth/register/register'; // 1. Importando nosso componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegisterComponent], // 2. Adicionando à lista de materiais
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Não precisamos de nenhuma lógica aqui por enquanto.
  // O componente principal apenas servirá de "palco" para os outros.
}
