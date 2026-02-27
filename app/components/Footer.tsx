import { Mail, Camera, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-8 flex flex-col items-center gap-6 border-t border-primary/10 pt-8 pb-10">
            <div className="flex flex-col gap-3 items-center w-full">
                <p className="font-display font-bold tracking-widest text-primary text-xs uppercase mb-1">
                    CALIDAD DESDE EL ORIGEN
                </p>
                <a
                    title="Email"
                    className="text-text-main/70 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2"
                    href="mailto:cafeteria.terrazadenoe@gmail.com"
                >
                    <Mail className="w-[18px] h-[18px]" />
                    cafeteria.terrazadenoe@gmail.com
                </a>
                <div className="flex gap-6">
                    <a
                        title="Instagram"
                        className="text-text-main/70 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1.5"
                        href="https://instagram.com/rcadenoe_colombia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Camera className="w-[18px] h-[18px]" />
                        @rcadenoe_colombia
                    </a>
                    <a
                        title="Phone"
                        className="text-text-main/70 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1.5"
                        href="tel:+573112331548"
                    >
                        <Phone className="w-[18px] h-[18px]" />
                        +57 311 233 1548
                    </a>
                </div>
            </div>

            <button className="w-full max-w-xs bg-primary hover:bg-[#545d42] text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold tracking-wide">Pedir por WhatsApp</span>
            </button>

            <div className="flex flex-col items-center gap-2">
                <span className="w-12 h-1 bg-secondary/20 rounded-full"></span>
                <p className="font-serif italic text-secondary text-sm">Hecho en Tauramena con ❤.</p>
            </div>
        </footer>
    );
}
