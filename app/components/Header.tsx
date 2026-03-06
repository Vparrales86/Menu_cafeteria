import Image from "next/image";

export default function Header() {
    return (
        <header className="relative flex flex-col items-center pt-10 pb-6 px-6 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/80 before:to-white/60 dark:before:from-black/60 dark:before:to-black/40 before:pointer-events-none" style={{ backgroundImage: 'url(/Menu_cafeteria/fondo.jpg)' }}>
            <div className="flex flex-col items-center gap-5 relative z-10">
                <div className="relative w-28 h-28 rounded-full flex items-center justify-center border-[3px] border-primary/20 bg-card-light shadow-soft overflow-hidden">
                    <Image
                        src="/Menu_cafeteria/logo.png"
                        alt="El Arca de Noé Logo"
                        width={112}
                        height={112}
                        className="w-full h-full object-contain p-2"
                        priority
                    />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="font-serif text-[28px] font-bold text-primary dark:text-[#aab895] tracking-tight leading-none uppercase">
                        EL ARCA DE NOÉ
                    </h1>
                    <h2 className="text-secondary dark:text-[#be9e84] text-[11px] font-bold tracking-[0.3em] uppercase font-display">
                        Coffee & Roasters
                    </h2>
                    <p className="text-primary/70 dark:text-[#aab895]/60 text-[10px] font-bold tracking-widest uppercase mt-1 font-serif">
                        CALIDAD DESDE EL ORIGEN
                    </p>
                </div>
            </div>
        </header>
    );
}
