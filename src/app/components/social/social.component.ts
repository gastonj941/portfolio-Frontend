import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  faInstagram = faInstagram;
  faSquareFacebook = faSquareFacebook;
  faTwitter = faTwitter;

  constructor(private router:Router) { }

  login(){
    this.router.navigate(['/login'])
  }
}
