import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrls: ['./content.css']
})
export class Content implements OnInit {

  photoCover:string = "https://cdn.images.express.co.uk/img/dynamic/36/590x/1153619_1.jpg"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string = "OLA MUNDO"
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ){}

ngOnInit(): void {
  this.route.paramMap.subscribe(value =>
    this.id = value.get("id")
  )
  this.setValuesToComponent(this.id)
}


   setValuesToComponent(id:string | null){
      const result = dataFake.filter( article => article.id == id )[0]

        this.contentTitle = result.title
        this.contentDescription = result.description
        this.photoCover = result.photoCover

   }

}

