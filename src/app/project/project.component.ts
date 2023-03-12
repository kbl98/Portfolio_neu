import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() explanation;
  @Input() img;
  @Input() title;
  @Input() language;
  @Input() indexImpair=false;
  @Input() hover=false;

  hovern(){
    this.hover=true;
  }

}
