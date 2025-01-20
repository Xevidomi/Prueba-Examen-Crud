import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home-ecommerce.component.html',
  styleUrls: ['./home-ecommerce.component.css']
})
export class HomeEcommerceComponent implements OnInit {

  products: any[] = []

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getProducts()
  }

  /*
  PASO 1 -> Que esté disponible el servicio --> CONSTRUCTOR
  PASO 2 -> Que Angular me cree el componente --> LLAMAR AL COMPONENTE DE ANGULAR DESDE EL TEMPLATE PRINCIPAL. Implica que crea el template e inicializa las propiedades
  PASO 3 ->



  */

}

