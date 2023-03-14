import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor() {}
  @Input() nameWrong = false;
  @Input() emailWrong = false;
  @Input() textWrong = false;
  @ViewChild('nameField') nameField;
  @ViewChild('emailField') emailField;
  @ViewChild('messageField') messageField;
  @ViewChild('button') button;
  @ViewChild('myForm') myForm: ElementRef;

  point1Active = false;
  point2Active = false;
  point3Active = false;
  waiting = false;
  sent = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let button = this.button.nameField;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    button.disabled = true;
    this.waiting = true;
    // Animation warten
    let formdata = new FormData();
    formdata.append('name', 'nameField.value');
    formdata.append('message', 'messageField.value');
    formdata.append('email', 'emailField.value');
    //Senden

    await fetch('https://kbl-developement.php', {
      method: 'Post',
    });

    this.waiting = false;
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
    }, 2000);

    //Animation gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    button.disabled = false;
  }

  setPointsTrue() {
    this.point1Active = true;
    setTimeout(() => {
      this.point2Active = true;
    }, 1000);
    setTimeout(() => {
      this.point3Active = true;
    }, 1000);
  }
}
