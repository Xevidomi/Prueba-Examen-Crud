// src/app/components/product-form/product-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productos.service'; // Asegúrate de importar el servicio
import { Product } from '../../models/product.model'; // Asegúrate de importar el modelo

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html', // El archivo HTML de la plantilla
  styleUrls: ['./product-form.component.css'] // El archivo de estilo CSS (puedes dejarlo vacío por ahora)
})
export class ProductFormComponent implements OnInit {

  // Creamos un objeto product vacío para los valores del formulario
  product: Product = {
    id: 0,
    nombre: '',
    descripcion: '',
    colores: []  // Aquí inicializamos colores como un array vacío
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Inicializa cualquier lógica que necesites en la carga del componente
  }

  // Método para enviar el formulario
  onSubmit(): void {
    // Llamamos al servicio para guardar el nuevo producto
    this.productService.addProduct(this.product);
    console.log('Producto añadido:', this.product);
    
    // Reseteamos el formulario (opcional)
    this.product = {
      id: 0,
      nombre: '',
      descripcion: '',
      colores: []  // Aquí inicializamos colores como un array vacío
    };
  }
}
