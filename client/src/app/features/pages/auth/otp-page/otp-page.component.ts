import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements AfterViewInit {
  @ViewChild('otpInputs') otpInputs!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const inputs = this.otpInputs.nativeElement.querySelectorAll('.otp-input');
    inputs.forEach((input: Element) => {
      input.addEventListener('input', (e: any) => {
        const target = e.target;
        const val = target.value;

        if (isNaN(val)) {
          target.value = '';
          return;
        }

        if (val !== '') {
          const next = target.nextElementSibling;
          if (next) {
            next.focus();
          }
        }
      });

      input.addEventListener('keyup', (e: any) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
          const target = e.target;
          target.value = '';
          const prev = target.previousElementSibling;
          if (prev) {
            prev.focus();
          }
        }
      });
    });
  }
}