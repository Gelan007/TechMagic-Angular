import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-red',
  templateUrl: './button-red.component.html',
  styleUrl: './button-red.component.scss'
})
export class ButtonRedComponent {
  @Input() public buttonText: string | undefined
}
