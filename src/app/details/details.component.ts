import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { PieceServiceService } from '../piece-service.service';
import { Piece } from '../piece';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  pieceServiceService = inject(PieceServiceService)
  piece: Piece | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(){
    const detailsId = Number(this.route.snapshot.params['id'])
    this.piece = this.pieceServiceService.getPieceById(detailsId)
  }
  submitApplication() {
    this.pieceServiceService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
