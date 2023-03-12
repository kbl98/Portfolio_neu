import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

@Input() nameWrong=false;
@Input() emailWrong=false;
@Input() textWrong=false;


}

