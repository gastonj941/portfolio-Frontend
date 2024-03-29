import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent {
  educacion: Educacion = null;
  
  constructor(
    private educacionS: EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe({
      next: (data) =>{
        this.educacion = data;
      }, error: () =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe({
      next: () => {
        this.router.navigate(['']);
      }, error: () => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    }
    )
  }
}
