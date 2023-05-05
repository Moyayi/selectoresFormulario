import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit{

  constructor( private fb : FormBuilder){} 
  ngOnInit(): void {
    
  }

  miFormulario : FormGroup = this.fb.group({
    
  })


}
