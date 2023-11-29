import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  liste =[
    {
      id:1,
      titre:"Vélo",
      prix: 50,
      description:"Vélo pour enfant",
      image:"https://img.babymarkt.com/isa/163853/c3/detailpage_desktop_600/-/392805a6bc91405f867cd606151b6c27/prometheus-bicycles-velo-enfant-hawk-12-pouces-rouge-noir-a206496",
      disponibilite: true
    },
    {
      id:2,
      titre:"Moto",
      prix: 50,
      description:"Moto pour enfant",
      image:"https://media.carrefour.fr/medias/b7e985b98a36364e93479addb3845da7/p_1500x1500/3614614629433-photosite-20201104-173516-0.jpg",
      disponibilite: false
    },
    {
      id:3,
      titre:"Trotinette",
      prix: 100,
      description:"Trottinette pour enfant",
      image:"https://media.alltricks.com/large/217788061c2344d3a5b50.24121546.jpg",
      disponibilite: true
    }
  ]
  filterRoute=(id:number)=>{
    let element = this.liste.find((element)=>Number(element.id)===Number(id))
    return element
  }
  constructor() { }
}
