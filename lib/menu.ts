import { promises as fs } from 'fs';
import path from 'path';

export interface Product {
    nombre: string;
    etiqueta?: string;
    precio?: string; // Made optional as juice might not have base price
    precio_agua?: string;
    precio_leche?: string;
    descripcion?: string; // Description might be missing for juices
    imageUrl?: string;
}

export interface Category {
    categoria: string;
    productos: Product[];
    encabezados?: string[];
}

export interface MenuData {
    nombre_restaurante: string;
    subtitulo: string;
    eslogan: string;
    contacto: {
        instagram: string;
        email: string;
        telefono_pedidos: string;
    };
    categorias: Category[];
}

export async function getMenu(): Promise<MenuData> {
    const filePath = path.join(process.cwd(), 'public', 'Menu.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}
