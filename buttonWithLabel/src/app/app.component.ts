import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  changeLabelColor: boolean = false;
  changeLabelBgColor: boolean = false;
  changeLabel2ndCondition: boolean = true;
  changeLabel3rdCondition: boolean = false;

  ToggleLabelColor(): void {
    this.changeLabelColor = !this.changeLabelColor;
    this.changeLabelBgColor = !this.changeLabelBgColor;
  }

  //------------------------------------------------

  changeLabelFont: boolean = false;
  changeLabelFontSize: boolean = false;

  ToggleLabelFont(): void {
    this.changeLabelFont = !this.changeLabelFont;
    this.changeLabelFontSize = !this.changeLabelFontSize;
  }

  //------------------------------------------------

  changeVisibility: boolean = false;

  ToggleLabelVisibility(): void {
    this.changeVisibility = !this.changeVisibility;
  }

  //------------------------------------------------
  
  changeLabelText: boolean = false;

  originalText: string = 'Original text';

  newText: string = 'New text';

  ToggleLabelText(): void {
    this.changeLabelText = !this.changeLabelText;
  }

  //------------------------------------------------

  @ViewChild('label') label!: ElementRef;

  changeAnotherLabelText: boolean = false;

  // initializing the label with the original text
  ngAfterViewInit() {
    this.label.nativeElement.textContent = this.originalText;
  }

  ToggleLabelTextViewChild(): void {
    this.changeAnotherLabelText = !this.changeAnotherLabelText;
    this.label.nativeElement.textContent = this.changeAnotherLabelText ? this.newText : this.originalText;
  }
}
