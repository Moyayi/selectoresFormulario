import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesCountry } from '../../services/services.service';
import { InterfaceCountry } from '../../interfaces/regionCountry.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit{

  constructor(
    private fb : FormBuilder,
    private serviceCountry : ServicesCountry
    ){}
  ngOnInit(): void {
    this.regiones = this.serviceCountry.regiones;
    this.miFormulario.get('region')?.valueChanges
      .subscribe( region => {
        this.serviceCountry.getPiasesPorRegio( region )
          .subscribe( (paises) => {
            this.paises = paises
            console.log(this.paises)
          })
      })
  }

  paises : InterfaceCountry[] = []
  regiones : string [] = []
  miFormulario : FormGroup = this.fb.group({
    region : ['', Validators.required]
  })


  //ngSubmit()
  guardarDatos() : void {
    console.log(this.miFormulario.value)
  }

}
