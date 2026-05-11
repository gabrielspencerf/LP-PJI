import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ChevronRight, 
  Scale, 
  Zap, 
  Check,
  Award,
  Lock,
  Gavel,
  BookOpen,
  MessageSquare,
  Menu,
  X,
  Fingerprint,
  PlayCircle,
  Terminal,
  Cpu,
  Workflow,
  Database,
  Activity,
  Compass,
  EyeOff,
  Microscope,
  Library,
  ListChecks,
  MonitorCheck,
  Sparkles,
  Bot
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const ClaudeLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Método", href: "#metodo" },
    { label: "Riscos", href: "#riscos" },
    { label: "Fluxo", href: "#fluxo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 ${scrolled || isMenuOpen ? "glass-header py-3 shadow-xl shadow-brand/[0.02]" : "bg-transparent py-6 sm:py-8"}`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-4 sm:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 sm:gap-4 group" aria-label="Protocolo IJ - Ir para o topo">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-xl flex items-center justify-center text-accent transition-all group-hover:rotate-6 group-hover:scale-105 shadow-lg shadow-brand/10">
                <Scale className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-brand text-xl sm:text-2xl leading-none tracking-tighter uppercase">Protocolo IJ</span>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 rounded-full border border-accent/20">
                  <Sparkles className="w-2.5 h-2.5 text-accent" />
                  <span className="text-[7px] font-bold text-accent uppercase tracking-widest">Claude 3.5</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-[1px] bg-accent" />
                <span className="text-[9px] font-bold tracking-[0.3em] text-accent uppercase">Edição 2026</span>
              </div>
            </div>
          </a>
          
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-[12px] font-bold uppercase tracking-[0.15em] text-muted hover:text-accent transition-all relative group/nav"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover/nav:w-full" />
                </a>
              ))}
            </div>
            <a 
              href="#oferta" 
              className="hidden sm:inline-flex btn-primary py-3 px-8 text-xs tracking-widest uppercase hover:shadow-accent/20"
            >
              INICIAR PROTOCOLO
            </a>

            {/* Hamburger Button */}
            <button 
              className="md:hidden w-12 h-12 flex items-center justify-center text-brand focus:outline-none bg-bg-soft rounded-xl transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cta" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col pt-24 px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
          >
            <div className="flex flex-col gap-8 mt-12">
              {navItems.map((item, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold text-brand border-b border-border pb-6 flex items-center justify-between hover:text-accent transition-all group"
                >
                  {item.label}
                  <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#oferta"
                onClick={() => setIsMenuOpen(false)}
                className="btn-gold py-6 text-center text-lg mt-8 shadow-2xl"
              >
                GARANTIR ACESSO AGORA
              </motion.a>
            </div>
            <div className="mt-auto pb-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-bg-soft rounded-full flex items-center justify-center text-muted">
                <Scale className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase">Protocolo IJ • 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="h-[1.5px] w-12 bg-accent" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.3em] text-accent uppercase">MASTER Edition • 2026</span>
                  <div className="h-4 w-[1px] bg-accent/20" />
                  <div className="flex items-center gap-1.5">
                    <ClaudeLogo className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[10px] font-bold text-brand/40 uppercase tracking-widest">Anthropic Optimized</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-semibold text-brand leading-[1.1] sm:leading-[1.05] tracking-tight mb-10">
                A Nova ERA da <br />
                <span className="text-accent italic decoration-accent/20 underline underline-offset-[16px]">Advocacia</span>.
              </h1>
              
              <p className="book-text max-w-xl mb-12 sm:mb-16">
                O protocolo definitivo para transformar o Claude 3.5 em seu braço operacional tático, garantindo <span className="text-brand font-bold underline decoration-accent/30 underline-offset-8">higidez técnica</span> e segurança absoluta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a href="#oferta" className="btn-gold group flex items-center justify-center gap-4 py-5 sm:py-6 relative overflow-hidden transition-all active:scale-95">
                  <ClaudeLogo className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm">INICIAR PROTOCOLO AGORA</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
                <a href="#metodo" className="flex items-center justify-center gap-4 px-8 py-4 text-brand font-bold text-[13px] tracking-widest uppercase hover:text-accent transition-all group">
                  <div className="w-12 h-12 rounded-full border-2 border-brand/10 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all">
                    <PlayCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  O MÉTODO
                </a>
              </div>

              <div className="mt-16 sm:mt-20 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-4 border-white bg-bg-soft flex items-center justify-center text-[10px] font-bold text-brand shadow-lg">
                      {["R", "G", "V", "A"][i-1]}
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-muted tracking-widest uppercase leading-loose">
                  <span className="text-brand">+850 Advogados</span> já operam <br /> com o selo de auditoria ativo.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-12 lg:col-start-8 lg:w-[130%] lg:-ml-[30%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="card-dark !p-0 border-white/5 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] group overflow-hidden"
            >
              <div className="bg-white/[0.03] p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(197,160,89,1)]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-white/50 tracking-[0.3em] uppercase">Protocol: Active_Flow_Monitor</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="text-[10px] items-center gap-2 font-semibold text-white/30 tracking-widest hidden sm:flex">
                     SECURE_LAYER_X12
                   </div>
                   <ShieldCheck className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
              </div>

              <div className="p-10 sm:p-14 space-y-10">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border shadow-2xl bg-accent/10 border-accent/20 text-accent group-hover/item:scale-110">
                    <ClaudeLogo className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-display font-bold tracking-tight text-white">Claude Integration</div>
                    <div className="metadata-text mt-1 italic">Active Intelligence Layer</div>
                  </div>
                </div>

                {[
                  { icon: Gavel, t: "Qualificação Fática", s: "Concluído", c: "accent", time: "09:42 AM", progress: 100 },
                  { icon: MessageSquare, t: "Sondagem Dialética", s: "Validando", c: "accent", time: "10:15 AM", progress: 65 },
                  { icon: BookOpen, t: "Triangulação de Fontes", s: "Aguardando", c: "white/20", time: "--:--", progress: 0 },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group/item">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border shadow-2xl ${item.c === 'accent' ? 'bg-accent/10 border-accent/30 text-accent group-hover/item:scale-110 shadow-accent/10' : 'bg-white/5 border-white/5 text-white/20'}`}>
                          <item.icon className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <div>
                          <div className={`text-lg sm:text-xl font-display font-bold tracking-tight ${item.c === 'accent' ? 'text-white' : 'text-white/20'}`}>{item.t}</div>
                          <div className="text-[10px] text-white/30 font-semibold tracking-[0.2em] uppercase mt-1">{item.time}</div>
                        </div>
                      </div>
                      <div className={`text-[10px] font-semibold uppercase tracking-[0.3em] px-4 py-2 rounded-xl transition-all ${item.c === 'accent' ? 'bg-accent text-brand shadow-lg shadow-accent/20' : 'bg-white/5 text-white/20'}`}>{item.s}</div>
                    </div>
                    {item.progress > 0 && (
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden w-full ml-20">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${item.progress}%` }}
                             className="h-full bg-accent shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                          />
                       </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white/[0.02] p-8 border-t border-white/5 flex items-center justify-center gap-8">
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  <Lock className="w-4 h-4 text-accent" aria-hidden="true" />
                  AES-256 Protocol
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">
                   <Fingerprint className="w-4 h-4 text-accent" aria-hidden="true" />
                   AI_AUTH_ONLY
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

const SectionTitle = ({ eyebrow, title, desc, centered = true, id }: any) => (
  <div className={`mb-16 sm:mb-24 ${centered ? "text-center" : "text-left"}`}>
    <div className={`flex items-center gap-4 mb-8 ${centered ? "justify-center" : "justify-start"}`}>
      <div className="h-[1.5px] w-12 bg-accent/30" aria-hidden="true" />
      <span className="technical-label">{eyebrow}</span>
      <div className={`h-[1.5px] w-12 bg-accent/30 ${centered ? "block" : "hidden"}`} aria-hidden="true" />
    </div>
    <h2 id={id} className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-brand leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
      {title}
    </h2>
    {desc && <p className={`book-text ${centered ? "max-w-3xl mx-auto" : "max-w-2xl"}`}>{desc}</p>}
  </div>
);

const RiskSection = () => {
  return (
    <section id="riscos" className="py-24 sm:py-32 lg:py-40 bg-white border-y border-border">
      <div className="container mx-auto px-4 sm:px-8">
        <SectionTitle 
          eyebrow="SEGURANÇA JURÍDICA"
          title={<>O Risco da <br /><span className="text-cta">Imprudência</span> Digital.</>}
          desc="O uso de IA sem um protocolo de auditoria não é apenas um erro tático, é uma vulnerabilidade ética que pode custar sua carreira profissional."
          id="heading-riscos"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 reveal">
          {[
            { 
              icon: AlertTriangle, 
              title: "Precedente Fantasma", 
              desc: "O risco de citar julgados fictícios resultantes de alucinações da IA, o que destrói sua credibilidade técnica perante o tribunal em segundos.",
              impact: "Sanções processuais imediatas",
              severity: "CRÍTICO"
            },
            { 
              icon: Compass, 
              title: "Deriva Estratégica", 
              desc: "Aplicar teses genéricas que ignoram as particularidades do caso concreto, resultando em negativas de seguimento por falta de dialeticidade.",
              impact: "Preclusão Consumativa",
              severity: "ALTO"
            },
            { 
              icon: Microscope, 
              title: "Erosão Autoral", 
              desc: "A perda da voz e do estilo do advogado pela submissão total à linguagem do modelo, fragilizando a persuasão e a identidade da peça.",
              impact: "Fracasso Argumentativo",
              severity: "MÉDIO"
            },
            { 
              icon: EyeOff, 
              title: "Vazamento de Dados", 
              desc: "Input de fatos sensíveis sem anonimização prévia, expondo segredos de justiça e informações confidenciais em servidores de terceiros.",
              impact: "Processo Ético Disciplinar",
              severity: "CRÍTICO"
            }
          ].map((risk, idx) => (
            <div key={idx} className="card-premium group !p-10 border-brand/5 shadow-premium">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cta/5 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-110 blur-3xl" />
              
              <div className="flex justify-between items-start mb-12 relative">
                <div className="w-16 h-16 bg-bg-soft rounded-2xl flex items-center justify-center text-cta border border-cta/10 shadow-sm transition-all group-hover:bg-cta group-hover:text-white">
                  <risk.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="flex flex-col items-end">
                  <span className={`technical-label px-3 py-1.5 rounded-full ${risk.severity === 'CRÍTICO' ? 'bg-cta text-white shadow-lg shadow-cta/20 !tracking-widest' : 'bg-brand/10 text-brand'}`}>
                    {risk.severity}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand mb-4 leading-snug group-hover:text-accent transition-colors">{risk.title}</h3>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-10 opacity-90 font-medium">{risk.desc}</p>
              
                    <div className="pt-8 border-t border-brand/[0.05] relative">
                <span className="metadata-text block mb-3">Impacto Processual</span>
                <p className="text-base font-semibold text-cta italic">"{risk.impact}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  return (
    <section id="fluxo" className="py-24 sm:py-32 lg:py-48 bg-bg-soft overflow-hidden" aria-labelledby="heading-fluxo">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="reveal">
            <SectionTitle 
              centered={false}
              eyebrow="O PROTOCOLO"
              title={<>Engenharia de <br /><span className="text-accent italic decoration-accent/20 underline underline-offset-8">Prompt Jurídico</span>.</>}
              desc="Não se trata de 'pedir' algo à IA. É um método de extração técnica em 4 camadas que anula o risco de alucinação e garante a higidez do resultado final."
              id="heading-fluxo"
            />
            
            <div className="mt-16 space-y-4">
              {[
                { 
                  n: "01", 
                  t: "Blindagem Cognitiva", 
                  d: "Configuração de 'System Prompt' que impõe restrições de submissão à jurisdição brasileira, forçando o modelo a citar apenas fontes com selo oficial de tribunais.",
                  code: "SYS_LEVEL: RESTRICT_G_PUB_DOCS",
                  icon: ShieldCheck
                },
                { 
                  n: "02", 
                  t: "Sondagem Dialética", 
                  d: "Processo de 'Red Teaming' onde o Claude é treinado para atacar sua própria tese, revelando pontos cegos estratégicos antes da protocolização.",
                  code: "OP_MODE: ADVERSARIAL_AUDIT",
                  icon: MessageSquare
                },
                { 
                  n: "03", 
                  t: "Triangulação de Dados", 
                  d: "Cruzamento automático entre a saída da IA e repositórios de jurisprudência via scraping legal ou APIs, garantindo que o número do processo citado realmente exista.",
                  code: "VALID_STATE: SYNC_STJ_STF",
                  icon: Database
                },
                { 
                  n: "04", 
                  t: "Auditoria Humana de Saída", 
                  d: "Aplicação do Checklist de 15 pontos de conformidade ética e técnica. A peça só é liberada após validação de cada parâmetro de higidez processual.",
                  code: "FINAL_GATE: HUMAN_IN_LOOP",
                  icon: Fingerprint
                },
              ].map((step, i) => (
                <div key={i} className="group relative flex gap-6 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-premium">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/5 border border-brand/5 flex items-center justify-center text-accent font-display font-bold text-lg transition-all group-hover:bg-brand group-hover:text-accent">
                    {step.n}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-display font-semibold text-brand transition-colors leading-tight">{step.t}</h4>
                      <span className="text-[9px] font-mono font-bold text-accent/50 group-hover:text-accent tracking-tighter transition-colors">[{step.code}]</span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed max-w-md opacity-80">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative reveal">
             {/* Technical Dashboard Frame */}
             <div className="relative bg-brand rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border border-white/10">
                {/* Header of the "Device" */}
                <div className="flex items-center justify-between mb-8 px-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Encryption: Active</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 gap-6 relative">
                  {/* Step 1: Delimitation */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">Stage 01</span>
                      <Workflow className="w-4 h-4 text-white/30" />
                    </div>
                    <div className="text-white font-display font-semibold text-lg tracking-tight">Delimitação de Cenário</div>
                    <div className="flex gap-2">
                       <span className="px-2 py-1 bg-white/10 rounded text-[9px] font-mono text-white/60">Fatos</span>
                       <span className="px-2 py-1 bg-white/10 rounded text-[9px] font-mono text-white/60">Provas</span>
                       <span className="px-2 py-1 bg-white/10 rounded text-[9px] font-mono text-white/60">Tese</span>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-brand">
                       <Zap className="w-4 h-4 fill-brand" />
                    </div>
                  </div>

                  {/* Step 2: Processing (Claude) */}
                  <div className="bg-accent p-6 rounded-2xl flex flex-col gap-4 shadow-[0_0_50px_rgba(197,160,89,0.3)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <ClaudeLogo className="w-24 h-24 -mr-8 -mt-8" />
                    </div>
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-brand/60 tracking-[0.2em] uppercase">Processing Layer</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      </div>
                      <Cpu className="w-4 h-4 text-brand/40 animate-spin-slow" />
                    </div>
                    <div className="text-brand font-display font-bold text-xl tracking-tight flex items-center gap-3 relative z-10">
                      <ClaudeLogo className="w-6 h-6" />
                      Claude 3.5 Sonnet
                      <div className="px-2 py-1 bg-brand text-accent text-[8px] rounded uppercase font-black">v3.5_Stable</div>
                    </div>
                    <div className="h-1 bg-brand/10 rounded-full overflow-hidden relative z-10">
                       <div className="h-full bg-brand w-2/3 animate-pulse" />
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  <div className="flex justify-center -my-2 relative z-10">
                     <div className="w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white/50">
                        <Activity className="w-4 h-4" />
                     </div>
                  </div>

                  {/* Step 3: Result/Validation */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <Terminal className="w-5 h-5 text-accent mb-3" />
                        <div className="text-white font-semibold text-sm mb-1">Auditoria</div>
                        <div className="text-[10px] text-white/40 leading-snug">Checklist IJ v4.0 Ativo</div>
                     </div>
                     <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-2xl">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mb-3" />
                        <div className="text-white font-semibold text-sm mb-1">Protocolo</div>
                        <div className="text-[10px] text-green-400 opacity-60 leading-snug">Higidez Validada</div>
                     </div>
                  </div>
                </div>

                {/* Footer Decor */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-white/20 tracking-widest leading-none">
                   <div>0X882_SECURE_CONNECTION</div>
                   <div>UTC: 12:44:02</div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[100px] -z-10" />
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const qna = [
    { 
      q: "Quais áreas do direito o protocolo atende?", 
      a: "O método é agnóstico e estrutural. Ele foca nos princípios de fundamentação jurídica, pesquisa jurisprudencial avançada e revisão dialética, sendo aplicável com excelência do Direito Civil e Empresarial ao Penal Estratégico, especialmente em peças destinadas a Tribunais Superiores (STJ e STF)." 
    },
    { 
      q: "O protocolo é atualizado para o Claude 3.5 Sonnet?", 
      a: "Sim. O método é nativamente otimizado para as capacidades de 'computer use' e raciocínio lógico avançado da família Claude 3.5. Exploramos a janela de contexto de 200k tokens para garantir que o modelo processe volumes maciços de provas sem perder a coerência argumentativa." 
    },
    { 
      q: "O acesso à biblioteca de prompts é vitalício?", 
      a: "Exatamente. Ao garantir sua vaga, você recebe acesso vitalício à nossa Central de Inteligência, que inclui a biblioteca completa de engenharia de instruções e atualizações garantidas para todos os novos modelos lançados em 2026, mantendo sua operação sempre no estado da arte." 
    },
    { 
      q: "Como funciona a garantia de higidez jurídica?", 
      a: "Oferecemos 7 dias de garantia incondicional via Hotmart. Além disso, o protocolo é desenhado para que a IA nunca tenha a palavra final; o sistema impõe camadas de auditoria humana que garantem a segurança técnica, ética e a higidez absoluta de cada petição gerada." 
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white reveal" aria-labelledby="heading-faq">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <SectionTitle eyebrow="SUPORTE TÉCNICO" title="Perguntas Frequentes" id="heading-faq" />
        
        <div className="space-y-6">
          {qna.map((item, idx) => (
            <div key={idx} className="card-premium !p-0 overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-8 sm:px-10 py-6 sm:py-8 flex justify-between items-center text-left group"
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="font-display font-semibold text-lg sm:text-xl text-brand pr-8 transition-colors group-hover:text-accent">{item.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-xl border border-brand/10 flex items-center justify-center text-accent transition-all ${open === idx ? "rotate-45 bg-brand text-white border-brand" : "bg-bg-soft"}`} aria-hidden="true">
                  <Check className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-bg-soft/50"
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                  >
                    <div className="px-8 sm:px-10 pb-8 sm:pb-10 text-lg text-muted leading-[1.7] font-medium opacity-90">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-2xl"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      
      <main id="main-content" className="outline-none" tabIndex={-1}>
        <Hero />
        
        <section id="metodo" className="py-24 sm:py-32 lg:py-48 bg-bg-soft" aria-labelledby="heading-metodo">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="reveal">
                <SectionTitle 
                  centered={false}
                  eyebrow="MÉTODO VS FERRAMENTA"
                  title={<>O Direito não tolera <br /><span className="text-accent italic">o amanhã sem prova</span>.</>}
                  id="heading-metodo"
                />
                <p className="text-xl sm:text-2xl text-muted italic mb-10 leading-relaxed font-sans opacity-90 border-l-4 border-accent pl-8">
                  "O Claude é um estagiário de elite que tem transtorno de personalidade. Se você não souber como ele opera, ele vai te vender uma mentira como se fosse a verdade absoluta."
                </p>
                <div className="flex items-center gap-4 text-brand font-bold text-xs tracking-widest uppercase bg-white/50 w-fit px-6 py-3 rounded-full border border-brand/5 shadow-sm">
                  <ClaudeLogo className="w-5 h-5 text-accent" />
                  Selo de Auditoria Cognitiva Ativo
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
                {[
                  { title: "Lógica Sistêmica", icon: Terminal, color: "bg-white", desc: "Estruturação de prompts complexos baseados em ritos judiciais." },
                  { title: "Escrita Tática", icon: Workflow, color: "bg-white", desc: "Roteirização de teses com apoio de IA regenerativa de elite." },
                  { title: "Filtro de Sigilo", icon: EyeOff, color: "bg-white", desc: "Anonimização de dados sensíveis em camada pré-processamento." },
                  { title: "Selo de Auditoria", icon: MonitorCheck, color: "bg-accent/[0.08]", desc: "Protocolo de verificação humana obrigatória em 3 níveis." },
                ].map((c, i) => (
                  <div key={i} className={`card-premium h-auto min-h-[180px] p-8 sm:p-10 flex flex-col justify-between items-start text-left border-brand/5 shadow-premium group transition-all hover:-translate-y-2 ${c.color}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${c.color === 'bg-white' ? 'bg-bg-soft text-accent' : 'bg-white/10 text-white'}`}>
                      <c.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className={`font-display font-semibold text-lg sm:text-xl mb-2 ${c.color.includes('text-white') ? 'text-white' : 'text-brand'}`}>{c.title}</h4>
                      <p className="metadata-text !text-brand/40 leading-relaxed font-semibold">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RiskSection />
        <StepsSection />
        
        {/* Testimonial / Social Proof */}
        <section className="py-24 sm:py-32 lg:py-40 bg-brand text-white overflow-hidden relative" aria-label="Depoimento">
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent/20 rounded-full blur-[100px]" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-accent/10 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-10 sm:mb-12 animate-float" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold mb-10 sm:mb-14 max-w-4xl mx-auto leading-[1.2] tracking-tight italic">
              "A diferença entre o advogado <span className="text-accent underline decoration-accent/20 underline-offset-8">insustentável</span> e o que domina a IA está na capacidade de auditar o que é gerado."
            </h2>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
               <div className="h-[1.5px] w-12 sm:w-16 bg-accent/30" aria-hidden="true" />
               <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">Protocolo Jurisprudência Inteligente MASTER</span>
               <div className="h-[1.5px] w-12 sm:w-16 bg-accent/30" aria-hidden="true" />
            </div>
          </div>
        </section>

        <FAQ />

        <section id="oferta" className="py-24 sm:py-32 lg:py-48 bg-bg-soft relative" aria-labelledby="heading-oferta">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-7xl mx-auto bg-brand rounded-[3rem] sm:rounded-[5rem] p-10 sm:p-20 lg:p-28 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
              
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full text-accent text-[10px] font-semibold tracking-[0.2em] uppercase mb-10">
                    <Award className="w-4 h-4" />
                    MASTER Edition Access
                  </div>
                  
                  <h2 id="heading-oferta" className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold mb-8 leading-[1.1] tracking-tighter">Domine a <br /><span className="text-accent italic decoration-white/20 underline underline-offset-[16px]">Nova ERA</span> da <br />Advocacia.</h2>
                  
                  <p className="book-text max-w-md !text-white/90 mb-12">
                    O Protocolo IJ não é apenas um guia. É o seu novo sistema operacional jurídico, blindado contra o maior risco do mercado: <span className="text-accent font-bold">a imprudência tecnológica.</span>
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {[
                      { icon: ShieldCheck, t: "Auditoria 360", d: "Zero risco de alucinação." },
                      { icon: Activity, t: "Fluxo Dinâmico", d: "Ganho real de escala." },
                      { icon: Library, t: "Prompt Library", d: "Instruções auditadas." },
                      { icon: Gavel, t: "Tese Dialética", d: "Argumentação blindada." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-xs uppercase tracking-wider">{item.t}</p>
                          <p className="text-[10px] text-white/40">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand bg-accent/20 flex items-center justify-center text-[10px] font-semibold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] font-medium text-white/60 uppercase tracking-widest">
                      <span className="text-accent font-semibold">850+</span> advogados operando o protocolo
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-accent blur-[80px] opacity-10 -rotate-12" />
                  
                  <div className="card-dark p-8 sm:p-14 hover:shadow-[0_0_60px_-15px_rgba(197,160,89,0.35)] group/card">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-8">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        <span className="text-[10px] font-semibold text-accent tracking-[0.2em] uppercase">Vagas Limitadas • 2026</span>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-white/30 self-start mt-8">R$</span>
                        <div className="flex flex-col items-center">
                          <span className="text-3xl text-white/10 line-through font-bold mb-[-8px] tracking-wide">497,90</span>
                          <div className="flex items-baseline">
                            <span className="text-[7rem] sm:text-[11rem] font-display font-bold text-white tracking-tighter leading-none">197</span>
                            <div className="flex flex-col items-start ml-2 translate-y-[-10px] sm:translate-y-[-20px]">
                              <span className="text-3xl sm:text-4xl font-display font-bold text-accent">,90</span>
                              <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Único</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-accent font-semibold tracking-[0.3em] uppercase mb-4">Acesso Vitalício + Atualizações</p>
                    </div>
                    
                    <div className="space-y-5 mb-12">
                      {[
                        { l: "Tipo de Acesso", v: "Vitalício" },
                        { l: "Biblioteca Prompts", v: "Premium" },
                        { l: "Suporte Técnico", v: "VIP" },
                        { l: "Certificado", v: "Incluso" }
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 border-b border-white/[0.03] pb-4">
                          <span>{row.l}</span>
                          <span className={row.v === "Incluso" || row.v === "Vitalício" ? "text-white" : "text-accent"}>{row.v}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a href="#" className="btn-gold w-full text-center py-6 sm:py-7 rounded-[1.5rem] shadow-heavy group relative overflow-hidden flex items-center justify-center gap-3">
                      <Zap className="w-5 h-5 transition-transform group-hover:scale-125" />
                      <span className="relative z-10 text-[14px] sm:text-base">GARANTIR MEU ACESSO</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </a>
                    
                    <div className="mt-8 flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 opacity-40 grayscale group hover:grayscale-0 transition-all">
                        <Lock className="w-3 h-3" />
                        <span className="text-[8px] font-semibold uppercase tracking-widest">SSL Encrypted</span>
                      </div>
                      <div className="h-4 w-[1px] bg-white/10" />
                      <div className="flex items-center gap-1 opacity-40">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="text-[8px] font-semibold uppercase tracking-widest">Hotmart Secure</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Widget */}
                  <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 animate-float hidden sm:flex">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold text-brand uppercase tracking-widest">Inscrição Validada</p>
                      <p className="text-[11px] font-semibold text-brand">Vagas Disponíveis: 04</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 sm:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-accent" aria-hidden="true">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-display font-semibold text-brand uppercase tracking-widest text-sm">Protocolo IJ</span>
            </div>
            
            <div className="flex gap-6 sm:gap-10">
              <a href="#" className="text-[10px] font-semibold text-muted hover:text-brand tracking-widest uppercase transition-colors">Termos</a>
              <a href="#" className="text-[10px] font-semibold text-muted hover:text-brand tracking-widest uppercase transition-colors">Privacidade</a>
            </div>

            <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <ClaudeLogo className="w-5 h-5 text-brand" />
              <span className="text-[9px] font-bold text-brand uppercase tracking-[0.2em]">Powered by Anthropic Claude AI</span>
            </div>
          </div>
          
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="metadata-text">© 2026 Protocolo Jurisprudência Inteligente. Master Edition.</p>
              <p className="metadata-text max-w-sm text-center md:text-right !tracking-tight opacity-40">
                Auditoria Ética & Técnica via Claude LLM
              </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
