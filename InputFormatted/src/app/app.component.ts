import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText: string = "";

  formattedText: string = "";

  toUpperCase(): void {
    this.formattedText = this.inputText.toUpperCase();
  }

  // -------------------------------------------------

  inputText2: string = "";

  formattedText2: string = "";

  uppercase: boolean = false;

  renderText(): void {
    this.formattedText2 = this.inputText2;
  }
  
  toggleUpperCase(): void {
    this.uppercase = !this.uppercase;
    this.formattedText2 = this.uppercase ? this.inputText2.toUpperCase(): this.inputText2;
  }
}
