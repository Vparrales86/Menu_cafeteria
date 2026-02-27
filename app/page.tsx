import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import { getMenu } from "@/lib/menu";
import { SlidersHorizontal } from "lucide-react";

// Manual mapping of images from the HTML mockup to the JSON names for fidelity
const imageMap: Record<string, string> = {
  "Café americano": "https://lh3.googleusercontent.com/aida-public/AB6AXuCByQ1HY8AEiVmFXss_QxVGWMgaI7K4b3Poppo4E0lrAiZlSEwcr8SvS5wydyAIDWwzUrIKSr824QqhuKcYXTX-RYapzLgVSFZrjbiP9544xDhGbMhnmmpx7VTQSIhSxX3pLUEypQen8EyYnG-xovTR3VmDLCHvpEbCzYP311tdFeb7fQf7xXBIYwv9Ysc0kBseb8pE5NzZ3iiQFMNTTvmta4an2CK5XGgYAt6XYiKoNQYJ38AxHHvJtqOJMwLpdXTS71s_jsQmUN7v",
  "Café Espresso doble": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSogzKXu6lbbZh933j4we0DeKl8YePtpPpMWxvtbN9AJ21EaxQZHM73nXJLIJgaSoumIPR4_nc4KNWajH_SOJqFiZux2lhnE_kRV-A1Wyc9oUPSq4OsbDD4Hkis6ecxOJSmt90MXVYhYBlgflJ140nLyQ2Gq-iPDWPINor6Pr7N9JJupaxGySjoinVLTmKDNxrMAIHN4mET_8sC7098sO3kJ47_ckoJQq3BfWp5ZmUP592hRX6HBae5pN0l3LOywOKbGKLLbSqZ26",
  "Café del Arca": "https://lh3.googleusercontent.com/aida-public/AB6AXuBScqK1WS8rj7cib0Gkh1qQWuENVXTRzJZ0r8YIeYBQYM5cJbEJh3yHfvGoV0Vp2wer-XGSxhdvYawysXtc5RwwSJQje66KuLXdT_CK9lMqRVbiXvdzgRYKLkE803kOU59LsRlQ_6vIS6UrMzyEavWMWRIVle6GqQjxffbRVKwa1NIxbGMMBNG15aeC_S01C7kYzo3nY0_whWbC2rUS59Ib-W9hS-vD4xN3EH_Rjw8yosWfWix6-pRimXWoXCt16EZLI3dPnddbOaOz",
  "Capuchino Especial": "https://lh3.googleusercontent.com/aida-public/AB6AXuBScqK1WS8rj7cib0Gkh1qQWuENVXTRzJZ0r8YIeYBQYM5cJbEJh3yHfvGoV0Vp2wer-XGSxhdvYawysXtc5RwwSJQje66KuLXdT_CK9lMqRVbiXvdzgRYKLkE803kOU59LsRlQ_6vIS6UrMzyEavWMWRIVle6GqQjxffbRVKwa1NIxbGMMBNG15aeC_S01C7kYzo3nY0_whWbC2rUS59Ib-W9hS-vD4xN3EH_Rjw8yosWfWix6-pRimXWoXCt16EZLI3dPnddbOaOz",
  "Capuchino Vainilla": "https://lh3.googleusercontent.com/aida-public/AB6AXuCByQ1HY8AEiVmFXss_QxVGWMgaI7K4b3Poppo4E0lrAiZlSEwcr8SvS5wydyAIDWwzUrIKSr824QqhuKcYXTX-RYapzLgVSFZrjbiP9544xDhGbMhnmmpx7VTQSIhSxX3pLUEypQen8EyYnG-xovTR3VmDLCHvpEbCzYP311tdFeb7fQf7xXBIYwv9Ysc0kBseb8pE5NzZ3iiQFMNTTvmta4an2CK5XGgYAt6XYiKoNQYJ38AxHHvJtqOJMwLpdXTS71s_jsQmUN7v",
  "Capuchino Baileys": "https://lh3.googleusercontent.com/aida-public/AB6AXuBScqK1WS8rj7cib0Gkh1qQWuENVXTRzJZ0r8YIeYBQYM5cJbEJh3yHfvGoV0Vp2wer-XGSxhdvYawysXtc5RwwSJQje66KuLXdT_CK9lMqRVbiXvdzgRYKLkE803kOU59LsRlQ_6vIS6UrMzyEavWMWRIVle6GqQjxffbRVKwa1NIxbGMMBNG15aeC_S01C7kYzo3nY0_whWbC2rUS59Ib-W9hS-vD4xN3EH_Rjw8yosWfWix6-pRimXWoXCt16EZLI3dPnddbOaOz",
  "Café con leche": "https://lh3.googleusercontent.com/aida-public/AB6AXuCByQ1HY8AEiVmFXss_QxVGWMgaI7K4b3Poppo4E0lrAiZlSEwcr8SvS5wydyAIDWwzUrIKSr824QqhuKcYXTX-RYapzLgVSFZrjbiP9544xDhGbMhnmmpx7VTQSIhSxX3pLUEypQen8EyYnG-xovTR3VmDLCHvpEbCzYP311tdFeb7fQf7xXBIYwv9Ysc0kBseb8pE5NzZ3iiQFMNTTvmta4an2CK5XGgYAt6XYiKoNQYJ38AxHHvJtqOJMwLpdXTS71s_jsQmUN7v",
  "Café latte": "https://lh3.googleusercontent.com/aida-public/AB6AXuCByQ1HY8AEiVmFXss_QxVGWMgaI7K4b3Poppo4E0lrAiZlSEwcr8SvS5wydyAIDWwzUrIKSr824QqhuKcYXTX-RYapzLgVSFZrjbiP9544xDhGbMhnmmpx7VTQSIhSxX3pLUEypQen8EyYnG-xovTR3VmDLCHvpEbCzYP311tdFeb7fQf7xXBIYwv9Ysc0kBseb8pE5NzZ3iiQFMNTTvmta4an2CK5XGgYAt6XYiKoNQYJ38AxHHvJtqOJMwLpdXTS71s_jsQmUN7v",
  "Moca / Mochiatto": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSogzKXu6lbbZh933j4we0DeKl8YePtpPpMWxvtbN9AJ21EaxQZHM73nXJLIJgaSoumIPR4_nc4KNWajH_SOJqFiZux2lhnE_kRV-A1Wyc9oUPSq4OsbDD4Hkis6ecxOJSmt90MXVYhYBlgflJ140nLyQ2Gq-iPDWPINor6Pr7N9JJupaxGySjoinVLTmKDNxrMAIHN4mET_8sC7098sO3kJ47_ckoJQq3BfWp5ZmUP592hRX6HBae5pN0l3LOywOKbGKLLbSqZ26",
  "Milo CALIENTE": "https://lh3.googleusercontent.com/aida-public/AB6AXuBScqK1WS8rj7cib0Gkh1qQWuENVXTRzJZ0r8YIeYBQYM5cJbEJh3yHfvGoV0Vp2wer-XGSxhdvYawysXtc5RwwSJQje66KuLXdT_CK9lMqRVbiXvdzgRYKLkE803kOU59LsRlQ_6vIS6UrMzyEavWMWRIVle6GqQjxffbRVKwa1NIxbGMMBNG15aeC_S01C7kYzo3nY0_whWbC2rUS59Ib-W9hS-vD4xN3EH_Rjw8yosWfWix6-pRimXWoXCt16EZLI3dPnddbOaOz"
};

export default async function Home() {
  const menuData = await getMenu();
  const cafeCategory = menuData.categorias.find(c => c.categoria === "BARRA DE CAFÉ");

  if (!cafeCategory) return <div>Cargando...</div>;

  return (
    <div className="min-h-screen wood-texture pb-10">
      <Header />
      <Navigation />

      <main className="flex flex-col gap-6 px-4 pt-6 max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-primary dark:text-[#aab895] font-serif text-2xl font-bold">Barra de Café</h2>
          <div className="flex items-center gap-1 text-secondary text-sm">
            <span>Filtros</span>
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-4">
          {cafeCategory.productos.map((product, index) => (
            <ProductCard
              key={index}
              product={{
                ...product,
                imageUrl: imageMap[product.nombre] || undefined
              }}
            />
          ))}
        </div>

        <div className="h-8"></div>
      </main>
    </div>
  );
}
