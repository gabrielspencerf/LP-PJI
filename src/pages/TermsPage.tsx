import {useEffect} from 'react';
import {LegalLayout} from '@/components/layout/LegalLayout.tsx';
import {defaultDocumentTitle, legalLastUpdatedLabel, productName, siteDescription} from '@/config/site.ts';

export function TermsPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Termos de uso | ${defaultDocumentTitle}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <LegalLayout>
      <article className="space-y-8 text-sm leading-relaxed text-brand/90 sm:text-base">
        <header className="space-y-3 border-b border-border pb-8">
          <p className="label-micro text-muted">Documento legal</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl">Termos de uso</h1>
          <p className="text-muted">
            <span className="font-medium text-brand/80">{productName}</span> — última atualização:{' '}
            <time dateTime="2026-05-11">{legalLastUpdatedLabel}</time>
          </p>
        </header>

        <section className="space-y-3" aria-labelledby="t-aceitacao">
          <h2 id="t-aceitacao" className="font-display text-xl font-semibold text-brand">
            1. Aceitação
          </h2>
          <p>
            Ao acessar este site e/ou adquirir o treinamento <strong>{productName}</strong>, você declara ter lido e compreendido estes Termos de Uso. Se não concordar, interrompa o uso do site e não conclua a compra.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-objeto">
          <h2 id="t-objeto" className="font-display text-xl font-semibold text-brand">
            2. Objeto
          </h2>
          <p>
            O site divulga um produto educacional com finalidade informativa e comercial: {siteDescription} O conteúdo não substitui orientação personalizada, auditoria técnica ou parecer jurídico específico para o seu caso.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-publico">
          <h2 id="t-publico" className="font-display text-xl font-semibold text-brand">
            3. Público-alvo e responsabilidade profissional
          </h2>
          <p>
            O treinamento é voltado a profissionais do Direito que utilizam ou pretendem utilizar ferramentas de IA de forma assistida. O uso de IA na advocacia deve observar sigilo profissional, legislação aplicável, normas da OAB e revisão técnica do advogado responsável. Você permanece integralmente responsável pelas peças, pareceres, comunicações e decisões adotadas na sua prática.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-compra">
          <h2 id="t-compra" className="font-display text-xl font-semibold text-brand">
            4. Compra, acesso e plataforma de terceiros
          </h2>
          <p>
            Pagamentos, emissão de notas, reembolsos, suporte de pedido e entrega do conteúdo podem ser processados por plataforma comercial terceira (por exemplo, marketplace de infoprodutos). Nesse caso, aplicam-se também os termos e políticas da referida plataforma. Em caso de divergência sobre cobrança ou acesso, verifique primeiro o canal oficial da plataforma utilizada na compra.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-licenca">
          <h2 id="t-licenca" className="font-display text-xl font-semibold text-brand">
            5. Licença de uso do conteúdo
          </h2>
          <p>
            Salvo indicação em contrário, os materiais do treinamento (vídeos, textos, prompts, modelos e checklists) são protegidos por direitos autorais. É concedida uma licença pessoal, revogável, intransferível e não exclusiva para uso interno do adquirente, sem redistribuição pública, revenda, scraping sistemático ou republicação que prejudique o titular do produto.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-vedacoes">
          <h2 id="t-vedacoes" className="font-display text-xl font-semibold text-brand">
            6. Condutas vedadas
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            <li>Utilizar o site ou materiais para fins ilícitos, ofensivos ou que violem direitos de terceiros.</li>
            <li>Representar de modo enganoso que o produto é certificação oficial, garantia de resultado jurídico ou substituto da atuação humana do advogado.</li>
            <li>Tentar obter acesso não autorizado a sistemas, contas de terceiros ou bases de dados.</li>
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="t-isencao">
          <h2 id="t-isencao" className="font-display text-xl font-semibold text-brand">
            7. Limitação de responsabilidade
          </h2>
          <p>
            Na extensão máxima permitida pela lei aplicável, o site e os materiais são fornecidos “no estado em que se encontram”. Ferramentas de IA podem cometer erros; exemplos e modelos são didáticos. Em nenhum caso a responsabilidade ultrapassará o valor efetivamente pago pelo produto ao titular direto da oferta, salvo disposição legal imperativa em contrário.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-links">
          <h2 id="t-links" className="font-display text-xl font-semibold text-brand">
            8. Links externos
          </h2>
          <p>
            O site pode conter links para serviços de terceiros (incluindo provedores de IA e checkout). Não controlamos esses serviços e não nos responsabilizamos pelas suas práticas de privacidade ou termos.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-alteracoes">
          <h2 id="t-alteracoes" className="font-display text-xl font-semibold text-brand">
            9. Alterações
          </h2>
          <p>
            Podemos atualizar estes Termos para refletir mudanças legais, de produto ou de funcionamento do site. A data da última atualização será indicada no topo desta página. O uso continuado após alterações constitui aceitação dos novos termos, na medida permitida pela lei.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="t-lei">
          <h2 id="t-lei" className="font-display text-xl font-semibold text-brand">
            10. Lei aplicável e foro
          </h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de domicílio do consumidor para demandas qualificadas como relação de consumo, quando aplicável; nos demais casos, competirá o foro da comarca da capital do estado do domicílio do titular da oferta, salvo norma legal em contrário.
          </p>
          <p className="rounded-xl border border-border bg-white/60 p-4 text-sm text-muted">
            Este documento tem caráter informativo e não substitui assessoria jurídica personalizada. Ajuste cláusulas (empresa, CNPJ, foro, plataforma e políticas) com seu advogado antes de publicação final.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
