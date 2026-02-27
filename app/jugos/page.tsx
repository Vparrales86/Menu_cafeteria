import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { getMenu } from "@/lib/menu";
import { Citrus, Utensils, Sandwich, Cookie, Cake } from "lucide-react";
import { clsx } from "clsx";

export default async function JugosPage() {
    const menuData = await getMenu();
    const jugosCategory = menuData.categorias.find(c => c.categoria === "JUGOS NATURALES");
    const acompanarCategory = menuData.categorias.find(c => c.categoria === "PARA ACOMPAÑAR");

    // Icon mapping for sides
    const getIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes("empanada")) return <Sandwich className="w-5 h-5" />;
        if (n.includes("mantecada") || n.includes("torta")) return <Cake className="w-5 h-5" />;
        if (n.includes("galleta")) return <Cookie className="w-5 h-5" />;
        return <Utensils className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen wood-texture pb-10">
            <Header />
            <Navigation />

            <main className="flex flex-col gap-6 px-4 pt-6 max-w-lg mx-auto w-full">

                {/* Jugos Naturales Section */}
                {jugosCategory && (
                    <section>
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="font-serif text-2xl font-bold text-[#556B2F] dark:text-[#7BA428] tracking-tight">JUGOS NATURALES</h2>
                            <div className="h-[1px] bg-primary/20 flex-1"></div>
                        </div>

                        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-soft overflow-hidden border border-primary/10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-primary/10 bg-primary/5">
                                        <th className="py-4 pl-5 pr-2 font-display font-bold text-sm text-secondary uppercase tracking-wider w-1/2">FRUTA</th>
                                        <th className="py-4 px-2 font-display font-bold text-sm text-center text-secondary uppercase tracking-wider">AGUA</th>
                                        <th className="py-4 pl-2 pr-5 font-display font-bold text-sm text-right text-secondary uppercase tracking-wider">LECHE</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/5">
                                    {jugosCategory.productos.map((prod, idx) => (
                                        <tr key={idx} className={clsx("group hover:bg-primary/5 transition-colors", idx % 2 !== 0 ? "bg-[#F9F7F4] dark:bg-zinc-800/50" : "")}>
                                            <td className="py-4 pl-5 pr-2 font-serif text-text-main dark:text-gray-200 font-medium leading-tight">{prod.nombre}</td>
                                            {/* Note: JSON structure for logic is 'precio_agua' and 'precio_leche' which are NOT in the standard Product type, 
                          but TypeScript allows loose access or we can cast. In standard JSON form in file, they exist for this category.
                          We'll check if they exist or fallback to standard price. 
                      */}
                                            <td className="py-4 px-2 text-center text-primary font-bold tracking-tight text-sm">
                                                {prod.precio_agua || prod.precio}
                                            </td>
                                            <td className="py-4 pl-2 pr-5 text-right text-primary font-bold tracking-tight text-sm">
                                                {prod.precio_leche || "-"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-xs text-text-main/50 dark:text-gray-500 italic px-2">
                            * Todos nuestros jugos son preparados al instante con fruta fresca seleccionada.
                        </p>
                    </section>
                )}

                {/* Para Acompañar Section */}
                {acompanarCategory && (
                    <section id="acompanar">
                        <div className="flex items-center gap-4 mb-4 mt-2">
                            <h2 className="font-serif text-2xl font-bold text-[#556B2F] dark:text-[#7BA428] tracking-tight">PARA ACOMPAÑAR</h2>
                            <div className="h-[1px] bg-primary/20 flex-1"></div>
                        </div>

                        <div className="flex flex-col gap-3">
                            {acompanarCategory.productos.map((prod, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-card-light dark:bg-card-dark border border-primary/5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-background-light dark:bg-zinc-700 flex items-center justify-center text-secondary">
                                            {getIcon(prod.nombre)}
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="font-serif font-bold text-text-main dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                                                {prod.nombre}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 border-b-2 border-dotted border-gray-300 dark:border-gray-600 hidden sm:block"></div>
                                        <span className="font-bold text-primary text-base">{prod.precio}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <Footer />
            </main>
        </div>
    );
}
