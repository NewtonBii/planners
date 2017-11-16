import { Component} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
model = new Hero("Eat","High",true)

submitted = false;

onSubmit(){
  return this.submitted=true;
}
}
