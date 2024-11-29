import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  rectangleForm: FormGroup= new FormGroup({});  // Declaramos el FormGroup
  area: number | null = null;  // Variable para guardar el área

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Inicialización del formulario con validadores
    this.rectangleForm = this.formBuilder.group({
      base: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Método para calcular el área
  calculateArea() {
    const base = this.rectangleForm.get('base')?.value;
    const height = this.rectangleForm.get('height')?.value;
    this.area = base * height; // Calculamos el área
  }
}
