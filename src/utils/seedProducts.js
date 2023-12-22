import {addDoc, collection} from "firebase/firestore"
import { db } from "../config/firebaseConfig";

const productos = [
    {
        stock: 9,
        category: "zapatillas",
        name: "Nike Dunk Low Premium",
        price: 123.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/681738-800-800?v=638224573454330000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 5,
        category: "zapatillas",
        name: "Nike Air Force 1 '07 LX",
        price: 109.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/531627-800-800?v=638161382034970000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 5,
        category: "zapatillas",
        name: "Air Jordan 1 Low",
        price: 116.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/440278-1000-1000?v=638145715008870000&width=1000&height=1000&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 7,
        category: "zapatillas",
        name: "Nike Air Force 1 Low Retro",
        price: 109.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/702675-800-800?v=638233930112700000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 6,
        category: "zapatillas",
        name: "Nike Air Force 1 '07 SE",
        price: 109.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/408190-800-800?v=638143141211500000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 4,
        category: "zapatillas",
        name: "Air Jordan 1 Mid",
        price: 120.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/531141-800-800?v=638161374700700000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 3,
        category: "zapatillas",
        name: "Nike Tanjun",
        price: 94.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/517340-800-800?v=638156975502570000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 8,
        category: "zapatillas",
        name: "Nike Air Max 90",
        price: 129.999,
        image: "https://nikearprod.vtexassets.com/arquivos/ids/701426-800-800?v=638233907411130000&width=800&height=800&aspect=true",
        description: "Soy una description"

    },
    {
        stock: 3,
        category: "accesorios",
        name: "Gorra Negra EssentialZ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/0131-ba879f304c484a769c16515188979893-480-0.webp",
        description: "Soy una description"

    },
    {
        stock: 5,
        category: "accesorios",
        name: "Gorra Curva Gris",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/grais-c-donr11-612720d391478ff09d16802839404151-480-0.webp",
        description: "Soy una description"

    },
    {
        stock: 9,
        category: "accesorios",
        name: "Gorra Azul EssentialZ ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/oro-azul1-24a4aab4a88e343fa116802860619174-480-0.webp",
        description: "Soy una description"

    },
    {
        stock: 7,
        category: "accesorios",
        name: "Gorra Verde Agua EssentialZ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/0101-419d91e5ec42e2741716515197900356-480-0.webp",
        description: "Soy una description"

    },
    {
        stock: 8,
        category: "accesorios",
        name: "Gorra Amarilla EssentialZ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/0111-10b0d52be064504a9c16515192859355-480-0.webp",
        description: "Soy una description"

    },
    {
        stock: 8,
        category: "accesorios",
        name: "Gorra Marron EssentialZ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/gorramaro1-df57da515f43b6298016802802833367-480-0.jpg",
        description: "Soy una description"

    },
    {
        stock: 10,
        category: "accesorios",
        name: "Gorra Roja EssentialZ",
        price: 16.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/0141-1e0df07d2e677f5a9816522068945203-1024-1024.webp",
        description: "Soy una description"

    },
    {
        stock: 10,
        category: "accesorios",
        name: "Gorra Rosa EssentialZ",
        price: 19.999,
        image: "https://acdn.mitiendanube.com/stores/001/302/251/products/531-1864c3bfd0300a18f916622185502056-480-0.jpg",
        description: "Soy una description"
        
    },
];

export const seedProducts = () => {

    productos.forEach((product) => {
        addDoc(collection(db, "productos"), product);
    })
}