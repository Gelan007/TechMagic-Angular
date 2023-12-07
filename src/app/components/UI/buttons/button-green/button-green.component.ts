import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-green',
  templateUrl: './button-green.component.html',
  styleUrl: './button-green.component.scss'
})
export class ButtonGreenComponent {
  @Input() public buttonText: string | undefined
}
