// src/app/components/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productos.service'; // Asegúrate de importar el servicio
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
  private products: Product[] = [
    {id: 1, nombre: "Mackbook Pro 2024", descripcion:"el ordenador para sobornar a la profe", colores: ["silver", "green"]},
    {id: 2, nombre: "Imac de 2017", descripcion:"el modelo de Imac que representa a Apple", colores: ["grey", "black"]},
    {id: 3, nombre: "Iphone12", descripcion:"No hace falta tener el último Iphone para llamar a tus amigos", colores: ["yellow", "orange"]}
  ];

  
  isFormVisible: boolean = false;
  selectedProduct: Product | null = null;
  public get _products(): Product[] {  // Getter público
    return this.products;
  }
  
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    // Cargar productos cuando el componente se inicializa
    this.loadProducts();
  }

  // Cargar productos desde el servicio
  loadProducts(): void {
    this.products = this.productService.getProducts();  // Obtener productos del servicio
  }

  // Mostrar formulario para agregar o editar un producto
  showProductForm(): void {
    this.isFormVisible = true;
    this.selectedProduct = null; // Resetea para agregar un nuevo producto
  }

  
  // Editar producto
  editProduct(id: number): void {
    this.isFormVisible = true;
    this.selectedProduct = null; 
  }

  // Eliminar producto
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();  // Refrescamos la lista de productos
  }
   // Callback cuando el producto se guarda desde el formulario
   onProductSaved(savedProduct: Product): void {
    if (this.selectedProduct) {
      // Si es un producto existente, actualizamos
      this.productService.editProduct(this.selectedProduct.id, savedProduct);
    } else {
      // Si es un nuevo producto, lo agregamos
      this.productService.addProduct(savedProduct);
    }
    this.isFormVisible = false;
    this.loadProducts(); // Refrescar la lista de productos después de guardar
  }

  // Cerrar el formulario
  closeForm(): void {
    this.isFormVisible = false;
  }
}
