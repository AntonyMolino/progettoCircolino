import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PiattiService } from './services/piatti.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fe-angular';

  piatti: any;

  constructor(private PiattiService: PiattiService) {}

  ngOnInit() {
    this.PiattiService.getPiatti().subscribe((data: any) => {
      this.piatti = data;
    });

    

  }

}
