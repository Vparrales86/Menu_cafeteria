"use client";

import { motion } from "framer-motion";
import { Plus, Flame, Zap, Droplet, Cookie, Milk, Candy, Snowflake } from "lucide-react";
import Image from "next/image";

// Types based on Menu.json could be imported, but defining prop interface here
interface ProductProps {
    nombre: string;
    precio?: string;
    descripcion?: string;
    etiqueta?: string;
    imageUrl?: string;
    tags?: string[];
    temperature?: 'hot' | 'cold' | 'none';
    [key: string]: any; // Allow for additional properties from Menu.json
}

export default function ProductCard({ product }: { product: ProductProps }) {
    // Mock image if none provided (using the ones from the code.html or a placeholder)
    const bgImage = product.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuCByQ1HY8AEiVmFXss_QxVGWMgaI7K4b3Poppo4E0lrAiZlSEwcr8SvS5wydyAIDWwzUrIKSr824QqhuKcYXTX-RYapzLgVSFZrjbiP9544xDhGbMhnmmpx7VTQSIhSxX3pLUEypQen8EyYnG-xovTR3VmDLCHvpEbCzYP311tdFeb7fQf7xXBIYwv9Ysc0kBseb8pE5NzZ3iiQFMNTTvmta4an2CK5XGgYAt6XYiKoNQYJ38AxHHvJtqOJMwLpdXTS71s_jsQmUN7v";

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col sm:flex-row gap-4 bg-card-light dark:bg-card-dark rounded-2xl p-3 shadow-soft dark:shadow-soft-dark border border-[#EBE8DF] dark:border-white/5 overflow-hidden transition-all hover:shadow-lg"
        >
            <div className="relative w-full sm:w-32 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shrink-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                />
                {product.etiqueta && (
                    <div className="absolute top-2 left-2 bg-accent/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
                        <p className="text-white text-[10px] font-bold tracking-wider uppercase">{product.etiqueta}</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col grow justify-between gap-3 sm:py-1 pr-1">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg font-bold text-text-main dark:text-white leading-tight">{product.nombre}</h3>
                        <span className="text-secondary dark:text-[#be9e84] font-bold font-serif">{product.precio}</span>
                    </div>
                    <p className="text-text-main/70 dark:text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">
                        {product.descripcion}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-1 text-xs text-primary/80 dark:text-primary/60">
                        {(!product.temperature || product.temperature === 'hot') && (
                            <>
                                <Flame className="w-4 h-4 text-orange-500" />
                                <span>Caliente</span>
                            </>
                        )}
                        {product.temperature === 'cold' && (
                            <>
                                <Snowflake className="w-4 h-4 text-blue-400" />
                                <span>Frío</span>
                            </>
                        )}
                    </div>
                    <button
                        aria-label={`Agregar ${product.nombre} al pedido`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md transition-colors hover:bg-[#525b42] focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-90"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.article>
    );
}
