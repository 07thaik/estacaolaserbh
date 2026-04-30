import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Sparkles, ShieldCheck, Zap, Heart, Award, CheckCircle2, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import laserCta from "@/assets/laser-cta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Estação Laser | Estética Avançada Premium em Belo Horizonte" },
      { name: "description", content: "Depilação a laser, limpeza de pele e criolipólise com tecnologia premium e protocolos personalizados em BH. Agende sua avaliação." },
      { property: "og:title", content: "Estação Laser | Estética Avançada Premium em BH" },
      { property: "og:description", content: "Resultados reais com tecnologia premium e atendimento exclusivo." },
      { property: "og:image", content: "https://i.ibb.co/xcg1hhZ/Whats-App-Image-2026-04-29-at-14-55-23.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/5531995127348";
const HERO_IMG = "https://i.ibb.co/xcg1hhZ/Whats-App-Image-2026-04-29-at-14-55-23.jpg";
const SERVICES_IMG = "https://i.ibb.co/wFr2YgDy/Whats-App-Image-2026-04-29-at-14-54-57.jpg";
const CTA_IMG = "https://i.ibb.co/pj7RYzKP/Whats-App-Image-2026-04-29-at-14-53-02.jpg";

function CTAButton({ children, variant = "primary", size = "lg" }: { children: React.ReactNode; variant?: "primary" | "secondary"; size?: "lg" | "md" }) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]";
  const sizes = { lg: "px-8 py-4 text-base md:text-lg", md: "px-6 py-3 text-sm md:text-base" };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[oklch(0.49_0.15_45)] shadow-premium",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-accent",
  };
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Estação Laser" className="w-9 h-9 object-contain" />
          <span className="font-bold text-lg tracking-tight">Estação Laser</span>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-[oklch(0.49_0.15_45)]">
          <MessageCircle className="w-4 h-4" /> (31) 99512-7348
        </a>
      </header>

      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">Estética Avançada em Belo Horizonte</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Resultados Reais em <span className="text-gradient-warm">Estética Avançada</span> com Tecnologia Premium
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Depilação a laser, limpeza de pele e criolipólise com protocolos personalizados em Belo Horizonte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CTAButton variant="primary"><Sparkles className="w-5 h-5" /> Agendar Avaliação Especializada</CTAButton>
              <CTAButton variant="secondary"><MessageCircle className="w-5 h-5" /> Falar no WhatsApp</CTAButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: Heart, text: "Atendimento direto com especialista" },
                { icon: Zap, text: "Equipamento premium" },
                { icon: ShieldCheck, text: "Protocolos personalizados" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <p.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-warm rounded-3xl blur-2xl opacity-20" />
            <img src={HERO_IMG} alt="Estação Laser - Estética Avançada Premium em BH" loading="eager" className="relative rounded-3xl shadow-premium w-full h-[480px] md:h-[560px] object-cover" />
          </div>
        </div>
      </section>

      {/* DORES + SOLUÇÃO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Cansada de promessas que não entregam?</h2>
            <p className="text-muted-foreground text-lg">Você merece uma experiência diferente.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Laser que não funciona?", "Medo de dor?", "Atendimento impessoal?", "Gordura localizada incomoda?"].map((d, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-left">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <p className="font-semibold text-base">{d}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-primary/10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Na <span className="text-primary font-bold">Estação Laser</span> cada tratamento é ajustado para sua necessidade real.
            </p>
            <div className="mt-8">
              <CTAButton><MessageCircle className="w-5 h-5" /> Quero Minha Avaliação</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1 mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 gradient-warm rounded-3xl blur-2xl opacity-15" />
              <img src={SERVICES_IMG} alt="Tecnologia premium e protocolos personalizados" loading="lazy" className="relative rounded-3xl shadow-premium w-full aspect-[9/16] object-cover" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Tratamentos que entregam resultado</h2>
              <p className="text-muted-foreground text-lg">Tecnologia de ponta combinada com protocolos individualizados para cada tipo de pele e objetivo.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Depilação a Laser", desc: "Tecnologia Galaxy Fiber Evo (fibra óptica). Mais conforto e eficiência em todas as sessões.", icon: Zap },
              { title: "Limpeza de Pele", desc: "Protocolos profundos personalizados. Pele renovada com técnica especializada.", icon: Sparkles },
              { title: "Criolipólise", desc: "Redução de gordura localizada e contorno corporal com tecnologia avançada.", icon: Award },
            ].map((s, i) => (
              <div key={i} className="group bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-premium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl gradient-warm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton><Sparkles className="w-5 h-5" /> Agendar Avaliação Agora</CTAButton>
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Por que escolher a <span className="text-gradient-warm">Estação Laser</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Não somos franquia. Somos uma clínica independente com foco total em resultado real.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Clínica independente",
              "Sem rotatividade de profissionais",
              "Tecnologia premium",
              "Atendimento humano",
              "Avaliação criteriosa",
              "Foco total em resultado",
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 flex items-start gap-4 shadow-soft border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-premium">
            <img src={laserCta} alt="Depilação a laser com tecnologia premium" loading="lazy" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.005_0)/0.85] via-[oklch(0.18_0.005_0)/0.7] to-[oklch(0.18_0.005_0)/0.4]" style={{ background: "linear-gradient(to right, oklch(0.18 0.005 0 / 0.88), oklch(0.18 0.005 0 / 0.65), oklch(0.18 0.005 0 / 0.3))" }} />
            <div className="relative px-8 md:px-16 py-20 md:py-32 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Sua melhor versão começa agora
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Agende sua avaliação e fale direto no WhatsApp.
              </p>
              <CTAButton><Sparkles className="w-5 h-5" /> Garantir Meu Protocolo Personalizado</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.18_0.005_0)] text-white py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Estação Laser" className="w-9 h-9 object-contain" />
              <span className="font-bold text-lg">Estação Laser</span>
            </div>
            <p className="text-white/70 text-sm">Estética avançada de alta performance em Belo Horizonte.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold mb-3">Localização</p>
            <p className="flex items-center gap-2 text-white/80 text-sm"><MapPin className="w-4 h-4" /> Belo Horizonte - MG</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Contato</p>
            <a href="https://instagram.com/estacaolaser" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
              <Instagram className="w-4 h-4" /> @estacaolaser
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
              <MessageCircle className="w-4 h-4" /> (31) 99512-7348
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Estação Laser. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium hover:scale-110 transition-transform animate-pulse"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
      </a>
    </div>
  );
}
