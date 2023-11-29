import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.component.html',
  styleUrls: ['./details-articles.component.css']
})
export class DetailsArticlesComponent implements OnInit{
  //@ts-ignore
  route;
  //@ts-ignore
  article;
  constructor(private activatedRoute: ActivatedRoute, private dataService:DataService) {
  }

  ngOnInit(){
    this.route = this.activatedRoute.snapshot.params["id"]
    this.article=this.dataService.filterRoute(this.route)
  }

}
