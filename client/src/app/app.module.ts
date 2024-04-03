import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HttpClient, useFactory: provideHttpClient }
  ],
  bootstrap: []
})
export class AppModule { }

export function provideHttpClient() {
  return HttpClient;
}