import { PieceComponent } from '../piece/piece.component';
import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CuisineComponent } from '../cuisine/cuisine.component';
import { SalonComponent } from '../salon/salon.component';
import { PieceServiceService } from '../piece-service.service';
import { Piece } from '../piece';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PieceComponent, CuisineComponent, SalonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pieceList: Piece[] = []
  pieceService: PieceServiceService = inject(PieceServiceService)
  monMessage: string = "Je suis ton père"
  filteredPieceList: Piece[] = [];
  constructor(){
    this.pieceList = this.pieceService.getAllPieces()
    this.filteredPieceList = this.pieceList
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredPieceList = this.filteredPieceList;
      return;
    }
    this.filteredPieceList = this.pieceList.filter((piece) =>
      piece?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
