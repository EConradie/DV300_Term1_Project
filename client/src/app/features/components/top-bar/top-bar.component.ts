import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = null;

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.sessionService.getIsLoggedIn();
    this.username = this.sessionService.getUsername();
  }

  logout(): void {
    this.sessionService.clearSession();
    this.isLoggedIn = false;
    this.username = null;
    this.router.navigate(['/login']);
  }
}
