import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService } from '../../../services/packages.service';
import { Packages } from '../../models/packages.model';

@Component({
  selector: 'app-packages-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-cards.component.html',
  styleUrl: './packages-cards.component.css'
})
export class PackagesCardsComponent implements OnInit {
  packages: Packages[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageService.getAllPackages().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (error) => {
        console.error('Error fetching packages:', error);
      }
    });
  }
}