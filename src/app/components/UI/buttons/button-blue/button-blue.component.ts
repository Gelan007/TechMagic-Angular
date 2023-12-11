import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-blue',
  templateUrl: './button-blue.component.html',
  styleUrl: './button-blue.component.scss'
})
export class ButtonBlueComponent {
  @Input() public buttonText: string | undefined


}
