import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = "enable"
  corFundo:string = "purple"
  item:string = ""
  lista:string[] = []
  constructor() {}

    adicionarlista(){
      this.lista.push(this.item)
    }

    removerdalista(){
      this.lista.pop()
    }



  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}
