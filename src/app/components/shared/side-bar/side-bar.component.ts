import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  tokenDetails;
  showUsuarios = false;
  showTerminales = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.tokenDetails = this.auth.traducirToken();
  }



}
