import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  novoAnimal: Animal = {
    id: 0,
    nome: '',
    especie: '',
    raca: '',
    idade: 0,
    nomeDono: '',
    contactoDono: ''
  };

  animais: Animal[] = [];

  constructor(private animalService: AnimalService) {
    this.animalService.getAnimais().subscribe(animais => this.animais = animais);
  }

  adicionarAnimal(): void {
    this.animalService.adicionarAnimal({...this.novoAnimal});
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.novoAnimal = {
      id: 0,
      nome: '',
      especie: '',
      raca: '',
      idade: 0,
      nomeDono: '',
      contactoDono: ''
    };
  }
} 
