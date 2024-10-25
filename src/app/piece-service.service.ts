import { Injectable } from '@angular/core';
import { Piece } from './piece';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  pieceList: Piece[] = [{
    id: 1,
    name: 'hall',
    state: 'Ouvert',
    photo: `${this.baseUrl}/example-house.jpg`,
    wifi: true,
    functionServe: 'tester si ça fonctionne'
  },{
    id: 2,
    name: 'salle de bain',
    state: 'Ouvert',
    photo: `${this.baseUrl}/example-house.jpg`,
    wifi: true,
    functionServe: 'tester si ça fonctionne'
},{
  id: 3,
  name: 'placard',
  state: 'Ouvert',
  photo: `${this.baseUrl}/example-house.jpg`,
  wifi: true,
  functionServe: 'tester si ça fonctionne'
},{
  id: 4,
  name: 'Cellier',
  state: 'Ouvert',
  photo: `${this.baseUrl}/example-house.jpg`,
  wifi: true,
  functionServe: 'tester si ça fonctionne'
},{
  id: 5,
  name: 'Cave',
  state: 'Ouvert',
  photo: `${this.baseUrl}/example-house.jpg`,
  wifi: true,
  functionServe: 'tester si ça fonctionne'
  }]
  constructor() { }

  getAllPieces(): Piece[] {
    return this.pieceList;
  }
  getPieceById(id: number): Piece | undefined {
    return this.pieceList.find((piece) => piece.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Pieces application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
