import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-register',
  templateUrl: './animal-register.component.html',
  styleUrls: ['./animal-register.component.css']
})
export class AnimalRegisterComponent implements OnInit {
  animalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.animalForm = this.fb.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      raca: [''],
      idade: ['', [Validators.required, Validators.min(0)]],
      sexo: ['', Validators.required],
      proprietario: ['', Validators.required],
      contato: ['', Validators.required],
      observacoes: ['']
    });
  }

  ngOnInit() {
    // Se você precisar fazer algo no ngOnInit, pode fazer aqui
  }

  onSubmit() {
    if (this.animalForm.valid) {
      console.log(this.animalForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    }
  }
}