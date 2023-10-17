import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  imgCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)
    if(result){
      this.imgCover = result[0].image
      this.contentTitle = result[0].title
      this.contentDescription = result[0].description
    }
  }

}
