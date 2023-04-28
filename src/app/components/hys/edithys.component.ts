import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})
export class EdithysComponent {
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe({
      next:(data) => {
        this.skill = data;
      }, error:() => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe({
      next:() => {
        this.router.navigate(['']);
      }, error:() => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    }
    )
  }
}
