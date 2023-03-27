import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  public showDialog = false;

  @Input()
  public set characterInput(character: Character | undefined) {
    if (character !== undefined) {
      this.character = character;
      this.showDialog = true;
    }
  }

  @Output()
  public closeEvent: EventEmitter<any> = new EventEmitter<any>();

  public character: Character | undefined;

  public closeDialog(): void {
    this.showDialog = false;
    this.character = undefined;
    this.closeEvent.emit();
  }
}
