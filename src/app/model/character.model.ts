import { EntityState } from '@ngrx/entity';

export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CharacterState extends EntityState<Character> {}
