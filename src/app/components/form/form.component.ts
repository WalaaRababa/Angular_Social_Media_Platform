import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() formData = new EventEmitter<{ email: string, password: string }>();
  @Input() message: string | undefined;
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit(event:Event)
  {
    event.preventDefault(); 
    if(this.form.valid)
      this.formData.emit({
        email: this.form.value.email as string,
        password: this.form.value.password as string
      });
      console.log('Form data emitted:', this.form.value); 

  }
}
