import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Moment } from 'src/app/models/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string
  @Input() momentData?: Moment | null = null;

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

    this.onSubmit.emit(this.momentForm.value)
  }

  async onFileSelected(event: any) {
    const imgBase64 = await this.toBase64(event.target.files[0]);
    this.momentForm.patchValue({image: imgBase64})
  }

  toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
