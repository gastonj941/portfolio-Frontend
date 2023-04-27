import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-sumar',
  templateUrl: './boton-sumar.component.html',
  styleUrls: ['./boton-sumar.component.css']
})
export class BotonSumarComponent {
  faPlus = faPlus;
}
