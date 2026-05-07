import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Sparkles, ShieldCheck, Zap, Heart, Award, CheckCircle2, Instagram, MapPin, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "@/assets/logo.png";
import laserCta from "@/assets/laser-cta.jpg";

const PROCEDURES = ["Depilação a Laser", "Criomodelagem", "Limpeza de Pele"] as const;
type Procedure = (typeof PROCEDURES)[number];

function joinList(items: string[]) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} e ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

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

const UNITS = {
  alipio: {
    name: "Alípio de Melo",
    address: "Avenida Abílio Machado, 1264 — Sala 1014",
    neighborhood: "Alípio de Melo, Belo Horizonte - MG",
    phone: "(31) 99380-0927",
    waPhone: "5531993800927",
    mapsQuery: "Avenida Abílio Machado 1264 Alípio de Melo Belo Horizonte",
  },
  vila: {
    name: "Vila Clóris",
    address: "Rua das Videiras, 290",
    neighborhood: "Vila Clóris, Belo Horizonte - MG",
    phone: "(31) 99512-7348",
    waPhone: "5531995127348",
    mapsQuery: "Rua das Videiras 290 Vila Cloris Belo Horizonte",
  },
} as const;

type UnitKey = keyof typeof UNITS;

const HERO_IMG = "https://i.ibb.co/xcg1hhZ/Whats-App-Image-2026-04-29-at-14-55-23.jpg";
const SERVICES_IMG = "https://i.ibb.co/wFr2YgDy/Whats-App-Image-2026-04-29-at-14-54-57.jpg";
const PROMO_IMG = "https://i.ibb.co/KzVH8kZ7/Whats-App-Image-2026-04-29-at-14-53-02.jpg";

const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar uma avaliação.");

function CTAButton({ children, variant = "primary", size = "lg", onClick }: { children: React.ReactNode; variant?: "primary" | "secondary"; size?: "lg" | "md"; onClick: () => void }) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer";
  const sizes = { lg: "px-8 py-4 text-base md:text-lg", md: "px-6 py-3 text-sm md:text-base" };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-[oklch(0.49_0.15_45)] shadow-premium",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-accent",
  };
  return (
    <button type="button" onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </button>
  );
}

type Step = "unit" | "info";

function Index() {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState<UnitKey>("vila");
  const [step, setStep] = useState<Step>("unit");
  const [pickedUnit, setPickedUnit] = useState<UnitKey | null>(null);
  const [name, setName] = useState("");
  const [procedures, setProcedures] = useState<Procedure[]>([]);

  const openWhats = () => {
    setStep("unit");
    setPickedUnit(null);
    setName("");
    setProcedures([]);
    setOpen(true);
  };

  const selected = UNITS[unit];

  const handlePickUnit = (k: UnitKey) => {
    setPickedUnit(k);
    setStep("info");
  };

  const toggleProcedure = (p: Procedure) => {
    setProcedures((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const submitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickedUnit || !name.trim() || procedures.length === 0) return;
    const u = UNITS[pickedUnit];
    const msg = `Olá, meu nome é ${name.trim()} e gostaria de agendar uma avaliação para ${joinList(procedures)}.`;
    const url = `https://wa.me/${u.waPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Estação Laser" className="w-9 h-9 object-contain" />
          <span className="font-bold text-lg tracking-tight">Estação Laser</span>
        </div>
        <a href="https://instagram.com/estacaolaserbh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-[oklch(0.49_0.15_45)]">
          <Instagram className="w-4 h-4" /> @estacaolaserbh
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
              <CTAButton variant="primary" onClick={openWhats}><Sparkles className="w-5 h-5" /> Agendar Avaliação Especializada</CTAButton>
              <CTAButton variant="secondary" onClick={openWhats}><MessageCircle className="w-5 h-5" /> Falar no WhatsApp</CTAButton>
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
              <CTAButton onClick={openWhats}><MessageCircle className="w-5 h-5" /> Quero Minha Avaliação</CTAButton>
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
            <CTAButton onClick={openWhats}><Sparkles className="w-5 h-5" /> Agendar Avaliação Agora</CTAButton>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-accent/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 gradient-warm rounded-3xl blur-2xl opacity-20" />
            <img src={PROMO_IMG} alt="Promoção exclusiva de depilação a laser" loading="lazy" className="relative rounded-3xl shadow-premium w-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wider">Oferta Exclusiva</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1]">
              Condições especiais para sua <span className="text-gradient-warm">primeira avaliação</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aproveite preços promocionais em pacotes de depilação a laser. Vagas limitadas — garanta a sua agora pelo WhatsApp.
            </p>
            <ul className="space-y-3">
              {["Avaliação personalizada sem compromisso", "Pacotes com condições exclusivas", "Atendimento direto com especialista"].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <CTAButton onClick={openWhats}><Sparkles className="w-5 h-5" /> Quero a Promoção</CTAButton>
            </div>
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.18 0.005 0 / 0.88), oklch(0.18 0.005 0 / 0.65), oklch(0.18 0.005 0 / 0.3))" }} />
            <div className="relative px-8 md:px-16 py-20 md:py-32 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Sua melhor versão começa agora
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Agende sua avaliação e fale direto no WhatsApp.
              </p>
              <CTAButton onClick={openWhats}><Sparkles className="w-5 h-5" /> Garantir Meu Protocolo Personalizado</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onde Estamos</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Nossas Unidades em <span className="text-gradient-warm">Belo Horizonte</span></h2>
            <p className="text-muted-foreground text-lg">Selecione a unidade mais próxima de você.</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-card rounded-full border border-border shadow-soft">
              {(Object.keys(UNITS) as UnitKey[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setUnit(k)}
                  className={`px-5 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                    unit === k ? "bg-primary text-primary-foreground shadow-premium" : "text-foreground hover:text-primary"
                  }`}
                >
                  {UNITS[k].name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl gradient-warm flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Unidade {selected.name}</h3>
                </div>
                <p className="text-lg font-medium mb-1">{selected.address}</p>
                <p className="text-muted-foreground mb-6">{selected.neighborhood}</p>
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">{selected.phone}</span>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => { openWhats(); handlePickUnit(unit); }}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-4 text-base bg-primary text-primary-foreground hover:bg-[oklch(0.49_0.15_45)] shadow-premium transition-all hover:scale-[1.03]"
                >
                  <MessageCircle className="w-5 h-5" /> Agendar na Unidade {selected.name}
                </button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-border/50 min-h-[360px]">
              <iframe
                key={unit}
                title={`Mapa Estação Laser ${selected.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(selected.mapsQuery)}&output=embed`}
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
            <p className="font-semibold mb-3">Unidades</p>
            <p className="flex items-start gap-2 text-white/80 text-sm"><MapPin className="w-4 h-4 mt-0.5" /> Alípio de Melo — Av. Abílio Machado, 1264 / sala 1014</p>
            <p className="flex items-start gap-2 text-white/80 text-sm"><MapPin className="w-4 h-4 mt-0.5" /> Vila Clóris — Rua das Videiras, 290</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Contato</p>
            <a href="https://instagram.com/estacaolaserbh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
              <Instagram className="w-4 h-4" /> @estacaolaserbh
            </a>
            <button type="button" onClick={openWhats} className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
              <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Estação Laser. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <button
        type="button"
        onClick={openWhats}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium hover:scale-110 transition-transform animate-pulse"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
      </button>

      {/* DIALOG AGENDAMENTO */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg rounded-2xl max-h-[90vh] overflow-y-auto">
          {step === "unit" ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Escolha a unidade</DialogTitle>
                <DialogDescription>Em qual unidade você deseja realizar sua avaliação?</DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 pt-2">
                {(Object.keys(UNITS) as UnitKey[]).map((k) => {
                  const u = UNITS[k];
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => handlePickUnit(k)}
                      className="flex items-center justify-between gap-4 p-4 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-accent/40 transition-all group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl gradient-warm flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-base">{u.name}</p>
                          <p className="text-xs text-muted-foreground">{u.neighborhood}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <form onSubmit={submitInfo}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Seus dados</DialogTitle>
                <DialogDescription>
                  Unidade {pickedUnit ? UNITS[pickedUnit].name : ""}. Informe seu nome e o(s) procedimento(s) desejado(s).
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-5 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="lead-name">Nome</Label>
                  <Input id="lead-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required autoFocus />
                </div>
                <div className="grid gap-2">
                  <Label>Procedimentos</Label>
                  <div className="grid gap-2">
                    {PROCEDURES.map((p) => {
                      const checked = procedures.includes(p);
                      return (
                        <label
                          key={p}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                            checked ? "border-primary bg-accent/40" : "border-primary/20 hover:border-primary/50"
                          }`}
                        >
                          <Checkbox checked={checked} onCheckedChange={() => toggleProcedure(p)} />
                          <span className="font-medium text-sm">{p}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep("unit")}
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3 text-sm border-2 border-primary/20 hover:border-primary text-foreground transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={!name.trim() || procedures.length === 0}
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3 text-sm bg-primary text-primary-foreground hover:bg-[oklch(0.49_0.15_45)] shadow-premium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="w-4 h-4" /> Enviar no WhatsApp
                  </button>
                </div>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
