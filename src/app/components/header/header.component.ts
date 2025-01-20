import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';  // Importamos la interfaz Product
import { ProductService } from '../../services/productos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}


