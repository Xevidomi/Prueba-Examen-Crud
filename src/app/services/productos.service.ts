import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';  // Asegúrate de importar la interfaz Product


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1, nombre: "Mackbook Pro 2024", descripcion:"el ordenador para sobornar a la profe", colores: ["silver", "green"]},
    {id: 2, nombre: "Imac de 2017", descripcion:"el modelo de Imac que representa a Apple", colores: ["grey", "black"]},
    {id: 3, nombre: "Iphone12", descripcion:"No hace falta tener el último Iphone para llamar a tus amigos", colores: ["yellow", "orange"]}
  ];

  constructor() { }

 // Método para obtener todos los productos
 getProducts(): Product[] {
  return this.products;
}

  // Método para agregar un producto
  addProduct(product: Product): void {
    this.products.push(product);
  }
  // Método para editar un producto
  editProduct(id: number,  updatedProduct: Product): void {
    // Encuentra el índice del producto a editar
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      // Actualiza el producto en la lista
      this.products[index] = { ...this.products[index], };
    }
  }

  // Método para eliminar un producto
  deleteProduct(id: number): void {
    // Filtra el producto que se debe eliminar
    this.products = this.products.filter(product => product.id !== id);
  }
}