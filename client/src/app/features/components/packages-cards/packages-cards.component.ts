import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesService } from '../../../services/packages.service';


@Component({
  selector: 'app-packages-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-cards.component.html',
  styleUrl: './packages-cards.component.css'
})
export class PackagesCardsComponent implements OnInit {
  packages: any[] = [];

  constructor(private packagesService: PackagesService) { }

  ngOnInit() {
    this.packagesService.getPackages().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (error) => {
        console.error('Error fetching packages:', error);
      }
    });
  }
}
