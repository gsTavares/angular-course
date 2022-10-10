import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // Interfaces are important to maintain code pattern in scalable applications

  animals: Animal[] = [ // : Animal[] -> with this annotation, 
  // all elements in 'animals' must contain all Animal interface props
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 10 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 1 }
  ]

  animalDetails: string = "";

  // Defining a service to the component
  constructor(private listService: ListRenderService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
     this.animals = this.listService.remove(this.animals, animal);
  }

}
