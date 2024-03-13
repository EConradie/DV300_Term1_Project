import { Component } from '@angular/core';
import { RightSidePreviewBoxComponent } from '../../components/right-side-preview-box/right-side-preview-box.component';

@Component({
  selector: 'app-custom-package',
  standalone: true,
  imports: [RightSidePreviewBoxComponent],
  templateUrl: './custom-package.component.html',
  styleUrl: './custom-package.component.css'
})
export class CustomPackageComponent {

}
