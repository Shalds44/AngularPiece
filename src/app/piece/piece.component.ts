import { Component, Input } from '@angular/core';
import { Piece } from '../piece';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.scss'
})
export class PieceComponent {

  @Input() piece!: Piece;
  @Input() monMessage: string = "je suis un enfant"
}
