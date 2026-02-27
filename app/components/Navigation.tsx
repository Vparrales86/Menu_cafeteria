"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const categories = [
    { name: "BARRA DE CAFÉ", href: "/" },
    { name: "PRODUCTOS FRIOS", href: "/frios" },
    { name: "PASTELERIA", href: "/frios#pasteleria" },
    { name: "JUGOS NATURALES", href: "/jugos" },
    { name: "PARA ACOMPAÑAR", href: "/jugos#acompanar" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-20 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-black/5 dark:border-white/5 py-3 pl-4">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pr-4">
                {categories.map((cat) => {
                    // Check active state loosely matching path
                    const isActive = pathname === cat.href || (cat.href.includes("#") && pathname === cat.href.split("#")[0]);
                    return (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className={clsx(
                                "relative flex shrink-0 items-center justify-center rounded-xl px-5 h-10 transition-all active:scale-95",
                                isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-[#e6e2d6] dark:bg-[#3E3E3A] text-secondary dark:text-gray-300 hover:border-primary/30 border border-transparent"
                            )}
                        >
                            <span className="text-xs font-bold tracking-wide uppercase font-serif z-10 relative">
                                {cat.name}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
