import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import { getMenu } from "@/lib/menu";
import { Snowflake, Cake } from "lucide-react";

const imageMap: Record<string, string> = {
    "Granizado de Maracuyá": "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1zdzGwUUvpd2ZrXkrGh43BNzS_KSFTvxImFrc1_pnESqF4IN9ch3WzH3EteKVf69UJNTeL2Vn1Pv3QMZVgnm8aF7pFqjjj8XTTAx_K2MAGj8PHcDkUv63sFvSlPtzpgsP1RgASPLQodp7QzTsEN8uF97fTJt3J0gbqf4UgJ0A9MV6Q1wLT3zlYicx69UkAhDZOqgnGUtYyjsYQLjrsEHZody5Pcsb9TxhDXY31tc13flKw-nUEVGjaJL6LP-m_DDa_550H01BJ3g",
    "Granizado de Maracumango": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wN2E80_lnK9tsHoAbVceJ5pfN9cY9yTlkF0cUQjaDk-XPz4ZAwEVSeA0kgwj_FnYoDbJjOUUakMRpanvFsfOrYDtgHLlcvWLouhvBm4O0znVjrM2W2pqYRtszDP8TVyCnknjsVyjzBNZ7qcAVaRCnnxC9nCEncnEXm7TKeM4oyOTX2JRAyK7CBQK_NcsVu0zWoiKZJ9xEDHBOzRb2Oq0upyRp5mpSYJqlU9p2mw4b1M7M_hghDfZzh40dAD7rv4saoYK2-HK6eiG",
    "Granizado de Mango": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wN2E80_lnK9tsHoAbVceJ5pfN9cY9yTlkF0cUQjaDk-XPz4ZAwEVSeA0kgwj_FnYoDbJjOUUakMRpanvFsfOrYDtgHLlcvWLouhvBm4O0znVjrM2W2pqYRtszDP8TVyCnknjsVyjzBNZ7qcAVaRCnnxC9nCEncnEXm7TKeM4oyOTX2JRAyK7CBQK_NcsVu0zWoiKZJ9xEDHBOzRb2Oq0upyRp5mpSYJqlU9p2mw4b1M7M_hghDfZzh40dAD7rv4saoYK2-HK6eiG",
    "Granizado de café": "https://lh3.googleusercontent.com/aida-public/AB6AXuBtAk3EQICqmOMwk0ATCk03SrnRakvv0ECkvTDgugtm9SEzq0nltrWI-DRFtn329NJDMKFG2h9PxTWvn1HXlI9eqS2TUW75ZhnZ2z23VmnV5tdiMuwZeT00sMndEWXonr0pgigGu9piFgwEYIc3ZT4VLb9nwJm7QQqUPfjLB4uY8Uacpi9nlW_EcGmqH0jBqBFCUxgkrH59z4d8JDm6KBpuBtuRjjwJCyaosWroreOnGGFoGa3tbSC1JLjeLFxAz7Xdw5TWdg5XVIyD",
    "Granizado de Coco": "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1zdzGwUUvpd2ZrXkrGh43BNzS_KSFTvxImFrc1_pnESqF4IN9ch3WzH3EteKVf69UJNTeL2Vn1Pv3QMZVgnm8aF7pFqjjj8XTTAx_K2MAGj8PHcDkUv63sFvSlPtzpgsP1RgASPLQodp7QzTsEN8uF97fTJt3J0gbqf4UgJ0A9MV6Q1wLT3zlYicx69UkAhDZOqgnGUtYyjsYQLjrsEHZody5Pcsb9TxhDXY31tc13flKw-nUEVGjaJL6LP-m_DDa_550H01BJ3g",
    "Granizado de Milo": "https://lh3.googleusercontent.com/aida-public/AB6AXuBtAk3EQICqmOMwk0ATCk03SrnRakvv0ECkvTDgugtm9SEzq0nltrWI-DRFtn329NJDMKFG2h9PxTWvn1HXlI9eqS2TUW75ZhnZ2z23VmnV5tdiMuwZeT00sMndEWXonr0pgigGu9piFgwEYIc3ZT4VLb9nwJm7QQqUPfjLB4uY8Uacpi9nlW_EcGmqH0jBqBFCUxgkrH59z4d8JDm6KBpuBtuRjjwJCyaosWroreOnGGFoGa3tbSC1JLjeLFxAz7Xdw5TWdg5XVIyD",
    "Frappé de Café": "https://lh3.googleusercontent.com/aida-public/AB6AXuBtAk3EQICqmOMwk0ATCk03SrnRakvv0ECkvTDgugtm9SEzq0nltrWI-DRFtn329NJDMKFG2h9PxTWvn1HXlI9eqS2TUW75ZhnZ2z23VmnV5tdiMuwZeT00sMndEWXonr0pgigGu9piFgwEYIc3ZT4VLb9nwJm7QQqUPfjLB4uY8Uacpi9nlW_EcGmqH0jBqBFCUxgkrH59z4d8JDm6KBpuBtuRjjwJCyaosWroreOnGGFoGa3tbSC1JLjeLFxAz7Xdw5TWdg5XVIyD",
    "Frappé de Oreo": "https://lh3.googleusercontent.com/aida-public/AB6AXuBtAk3EQICqmOMwk0ATCk03SrnRakvv0ECkvTDgugtm9SEzq0nltrWI-DRFtn329NJDMKFG2h9PxTWvn1HXlI9eqS2TUW75ZhnZ2z23VmnV5tdiMuwZeT00sMndEWXonr0pgigGu9piFgwEYIc3ZT4VLb9nwJm7QQqUPfjLB4uY8Uacpi9nlW_EcGmqH0jBqBFCUxgkrH59z4d8JDm6KBpuBtuRjjwJCyaosWroreOnGGFoGa3tbSC1JLjeLFxAz7Xdw5TWdg5XVIyD",
    "Frappé de Fresa": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wN2E80_lnK9tsHoAbVceJ5pfN9cY9yTlkF0cUQjaDk-XPz4ZAwEVSeA0kgwj_FnYoDbJjOUUakMRpanvFsfOrYDtgHLlcvWLouhvBm4O0znVjrM2W2pqYRtszDP8TVyCnknjsVyjzBNZ7qcAVaRCnnxC9nCEncnEXm7TKeM4oyOTX2JRAyK7CBQK_NcsVu0zWoiKZJ9xEDHBOzRb2Oq0upyRp5mpSYJqlU9p2mw4b1M7M_hghDfZzh40dAD7rv4saoYK2-HK6eiG",
    "Limonada Cerezada": "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1zdzGwUUvpd2ZrXkrGh43BNzS_KSFTvxImFrc1_pnESqF4IN9ch3WzH3EteKVf69UJNTeL2Vn1Pv3QMZVgnm8aF7pFqjjj8XTTAx_K2MAGj8PHcDkUv63sFvSlPtzpgsP1RgASPLQodp7QzTsEN8uF97fTJt3J0gbqf4UgJ0A9MV6Q1wLT3zlYicx69UkAhDZOqgnGUtYyjsYQLjrsEHZody5Pcsb9TxhDXY31tc13flKw-nUEVGjaJL6LP-m_DDa_550H01BJ3g",
    "Postres de Maracuyá": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GzsYDVbQ0CwFvuXYX0krsZs_xl1YkfHyesYmtVZrxlPHQFLbREbOw5XCpDzCCh7B43ydCJU1NRiCUWuSB9ml-ocAItN12qj_m9Awgmm3OKwCFM-mMDPjRGxzHrmWtvKIjfP03rBHG6cWzV2xMUsHplO2zJ99vIIs9XjO_LO6t-uQOf_TInvh3kT9QaxadJBY_FmEZrEEuwl4Q9aOteJvVWy7bW0Rw4LRdHFnfc0ACWzwBVlRHmbkp9APZnlQP36yZHVc7h9Em8lr",
    "Postres de Oreo": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GzsYDVbQ0CwFvuXYX0krsZs_xl1YkfHyesYmtVZrxlPHQFLbREbOw5XCpDzCCh7B43ydCJU1NRiCUWuSB9ml-ocAItN12qj_m9Awgmm3OKwCFM-mMDPjRGxzHrmWtvKIjfP03rBHG6cWzV2xMUsHplO2zJ99vIIs9XjO_LO6t-uQOf_TInvh3kT9QaxadJBY_FmEZrEEuwl4Q9aOteJvVWy7bW0Rw4LRdHFnfc0ACWzwBVlRHmbkp9APZnlQP36yZHVc7h9Em8lr",
    "Gelatina Mosaico": "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GzsYDVbQ0CwFvuXYX0krsZs_xl1YkfHyesYmtVZrxlPHQFLbREbOw5XCpDzCCh7B43ydCJU1NRiCUWuSB9ml-ocAItN12qj_m9Awgmm3OKwCFM-mMDPjRGxzHrmWtvKIjfP03rBHG6cWzV2xMUsHplO2zJ99vIIs9XjO_LO6t-uQOf_TInvh3kT9QaxadJBY_FmEZrEEuwl4Q9aOteJvVWy7bW0Rw4LRdHFnfc0ACWzwBVlRHmbkp9APZnlQP36yZHVc7h9Em8lr",
    "Torta de la Casa": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXJCMMAwrMyS0D6Roya2D9fm0xqrOx4IlFVRzpWM-m5PpXTWfUpP-3xQrbqdyvvP-9KTsfiLaZcjJqh-K975804CytEz754qZ7S72bdr7tx1N7oWxPbm_F8jYj7x4UBTzJcgy0UgsoEPC7gYtmK5fU5cxpyAuNxl1CVhMmhNZHCAbzt-xdz7QBP2EtkS8iim1nlId2ou33JFYzrKmAGedjXX9qY14DShBBshYZGGD5x5uklsrY5lPqG9YV2yzntkYZB8Coj_oXOYY2"
};

export default async function FriosPage() {
    const menuData = await getMenu();

    // Try to find exact matches for categories, adjust string if needed based on JSON content
    const friosCategory = menuData.categorias.find(c => c.categoria.includes("PRODUCTOS FRIOS"));
    const pasteleriaCategory = menuData.categorias.find(c => c.categoria.includes("PASTELERIA"));

    return (
        <div className="min-h-screen wood-texture pb-10">
            <Header />
            <Navigation />

            <main className="flex flex-col gap-6 px-4 pt-6 max-w-lg mx-auto w-full">

                {/* Productos Frios Section */}
                {friosCategory && (
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Snowflake className="text-primary w-7 h-7" />
                            <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight uppercase">
                                Productos Frios <br />
                                <span className="text-sm font-semibold opacity-80 normal-case tracking-normal text-text-main/70 dark:text-white/60">
                                    Granizados & Frappés
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {friosCategory.productos.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    product={{
                                        ...product,
                                        temperature: 'cold',
                                        imageUrl: imageMap[product.nombre]
                                    }}
                                />
                            ))}
                        </div>
                    </section>
                )}

                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2" />

                {/* Pasteleria Section */}
                {pasteleriaCategory && (
                    <section id="pasteleria">
                        <div className="flex items-center gap-3 mb-4 mt-2">
                            <Cake className="text-primary w-7 h-7" />
                            <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight uppercase">
                                Pastelería <br />
                                <span className="text-sm font-semibold opacity-80 normal-case tracking-normal text-text-main/70 dark:text-white/60">
                                    Dulces & Postres
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {pasteleriaCategory.productos.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    product={{
                                        ...product,
                                        temperature: 'none',
                                        imageUrl: imageMap[product.nombre]
                                    }}
                                />
                            ))}
                        </div>
                    </section>
                )}

                <div className="h-8"></div>
            </main>
        </div>
    );
}
