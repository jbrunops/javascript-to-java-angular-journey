// Arquivo: app.ts (Versão CORRIGIDA E COMPLETA)

// As importações originais estavam um pouco diferentes, vamos usar as corretas.
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // <-- CORREÇÃO #1: Esta linha é ESSENCIAL e tinha sumido.
  imports: [CommonModule, RouterOutlet], // <-- CORREÇÃO #2: Adicionamos CommonModule, que é importante.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// CORREÇÃO #3: O nome da classe deve ser 'AppComponent' por convenção do Angular.
export class AppComponent {

  // CORREÇÃO #4: A definição das propriedades estava com a sintaxe incorreta.
  // Esta é a forma correta de definir 'title' e 'slogan' como signals.
  title = signal('Pizzaria La Notte');
  slogan = signal('A melhor da cidade!');

  // Opcional: Um método para mudar o título (vamos deixar comentado por enquanto)
  // mudarTitulo() {
  //   this.title.set('Novo Título Incrível');
  // }
}
