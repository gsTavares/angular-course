import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Input() btnText!: string

  /**  
   * momentForm: FormGroup -> component formGroup name for [formGroup] directive 
   * ! -> means that variable always contains a value. In that case, momentForm will be initialized 
   * on ngOnInit() method 
  */

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    /**
     * Form Group constructor -> receive all formControlName's defined on HTML form
     * Validators -> input validation rules
     */

    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  // get ${formControlName} -> gets the entire input as a FormControl  

  get title() {
    return this.momentForm.get("title")!;
  }

  get description() {
    return this.momentForm.get("description")!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    console.log('Enviou o formulário');
  }

}
