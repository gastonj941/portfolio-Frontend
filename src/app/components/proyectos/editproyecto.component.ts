import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent {
  proyecto: Proyecto = null;
  
  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe({
      next: (data) =>{
        this.proyecto = data;
      }, error: () =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe({
      next: () => {
        this.router.navigate(['']);
      }, error: () => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    }
    )
  }
}
