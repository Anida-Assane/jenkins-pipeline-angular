import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css'],
})
export class ListeArticlesComponent {
  // @ts-ignore
  liste;
  constructr(private dataService: DataService) {}
  ngOnInit() {
    this.liste = this.dataService.liste;
  }
}
