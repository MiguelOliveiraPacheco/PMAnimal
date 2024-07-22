import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animais: Animal[] = [];
  private animaisSubject = new BehaviorSubject<Animal[]>([]);

  constructor() { }

  getAnimais(): Observable<Animal[]> {
    return this.animaisSubject.asObservable();
  }

  adicionarAnimal(animal: Animal): void {
    animal.id = this.animais.length + 1;
    this.animais.push(animal);
    this.animaisSubject.next(this.animais);
  }
}
