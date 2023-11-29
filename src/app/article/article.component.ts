import { Component,Input } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  // @ts-ignore
  @Input id: number
  // @ts-ignore
  @Input() title: string
  // @ts-ignore
  @Input() prix: number;
  // @ts-ignore
  @Input() image: string
  // @ts-ignore
  @Input() disponible: boolean
  //@ts-ignore
  @Input() description: string

  contructor (){}
  variable: number = 0
  commentaire: string = "mon commentaire"
  jaime = true
  onColor=()=>{
    if(this.disponible=== true) {return "green"}
    else {return "red"}
  }
  onlike=()=>{
    if (this.jaime==true) this.variable++
    else this.variable--
    this.jaime=!this.jaime

  }
}
