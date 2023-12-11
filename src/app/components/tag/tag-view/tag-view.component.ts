import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrl: './tag-view.component.scss'
})
export class TagViewComponent {
  @Input() public text: string | undefined
  @Input() public color: string | undefined = 'blue'
}
