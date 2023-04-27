import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-trash',
  templateUrl: './boton-trash.component.html',
  styleUrls: ['./boton-trash.component.css']
})
export class BotonTrashComponent {
  faTrash = faTrash;
}
