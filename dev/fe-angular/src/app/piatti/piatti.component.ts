import { Component, OnInit } from '@angular/core';
import { PiattiService } from '../services/piatti.service';

@Component({
  selector: 'app-piatti',
  templateUrl: './piatti.component.html',
  styleUrls: ['./piatti.component.css']
})
export class PiattiComponent implements OnInit {
  piatti: any[] = [];

  constructor(private piattiService: PiattiService) {}

  ngOnInit(): void {
    this.getPiatti();
  }

  getPiatti(): void {
    this.piattiService.getPiatti()
      .subscribe(piatti => this.piatti = piatti);
  }

  aggiungiPiatto(piatto: any): void {
    this.piattiService.addPiatto(piatto)
      .subscribe(() => {
        this.getPiatti();
      });
  }

  aggiornaPiatto(piatto: any): void {
    this.piattiService.updatePiatto(piatto.id, piatto)
      .subscribe(() => {
        this.getPiatti();
      });
  }

  eliminaPiatto(id: number): void {
    this.piattiService.deletePiatto(id)
      .subscribe(() => {
        this.piatti = this.piatti.filter(p => p.id !== id);
      });
  }
}
