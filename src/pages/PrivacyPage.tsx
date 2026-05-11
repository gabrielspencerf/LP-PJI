import {useEffect} from 'react';
import {LegalLayout} from '@/components/layout/LegalLayout.tsx';
import {defaultDocumentTitle, getSiteContactEmail, legalLastUpdatedLabel, productName} from '@/config/site.ts';

export function PrivacyPage() {
  const contactEmail = getSiteContactEmail();

  useEffect(() => {
    const prev = document.title;
    document.title = `Política de privacidade | ${defaultDocumentTitle}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <LegalLayout>
      <article className="space-y-8 text-sm leading-relaxed text-brand/90 sm:text-base">
        <header className="space-y-3 border-b border-border pb-8">
          <p className="label-micro text-muted">Documento legal</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl">Política de privacidade</h1>
          <p className="text-muted">
            <span className="font-medium text-brand/80">{productName}</span> — última atualização:{' '}
            <time dateTime="2026-05-11">{legalLastUpdatedLabel}</time>
          </p>
        </header>

        <section className="space-y-3" aria-labelledby="p-controlador">
          <h2 id="p-controlador" className="font-display text-xl font-semibold text-brand">
            1. Controlador e contato
          </h2>
          <p>
            O controlador dos dados pessoais tratados por meio deste site é o titular da oferta do produto <strong>{productName}</strong>, conforme identificado no checkout e na comunicação comercial da compra.
          </p>
          {contactEmail ? (
            <p>
              Para solicitações relacionadas a privacidade e aos direitos previstos na LGPD, utilize:{' '}
              <a className="font-semibold text-accent underline-offset-4 hover:underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </p>
          ) : (
            <p className="rounded-xl border border-border bg-white/60 p-4 text-muted">
              Configure o e-mail de contato no ambiente do site (<code className="rounded bg-black/[0.04] px-1.5 py-0.5 font-mono text-xs">VITE_SITE_CONTACT_EMAIL</code>) para exibir aqui o canal oficial de privacidade.
            </p>
          )}
        </section>

        <section className="space-y-3" aria-labelledby="p-dados">
          <h2 id="p-dados" className="font-display text-xl font-semibold text-brand">
            2. Quais dados podemos tratar
          </h2>
          <p>Dependendo da sua interação, podemos tratar categorias como:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            <li>
              <strong>Dados de navegação no site</strong>: endereço IP, tipo de dispositivo, páginas visitadas, horários e identificadores técnicos de cookies ou tecnologias similares.
            </li>
            <li>
              <strong>Dados fornecidos por você</strong>: nome, e-mail ou mensagens enviadas por formulários, quando existirem.
            </li>
            <li>
              <strong>Dados de compra e suporte</strong>: informações necessárias para processar pedidos, reembolsos e atendimento, inclusive quando tratados diretamente pela plataforma comercial terceira responsável pelo pagamento e entrega do conteúdo.
            </li>
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="p-finalidades">
          <h2 id="p-finalidades" className="font-display text-xl font-semibold text-brand">
            3. Finalidades
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            <li>Operar o site, medir audiência e melhorar a experiência de uso.</li>
            <li>Viabilizar divulgação, cadastro e compra do treinamento.</li>
            <li>Cumprir obrigações legais e regulatórias, responder a solicitações legítimas e exercer direitos em processos.</li>
            <li>Prevenir fraudes, abusos e incidentes de segurança.</li>
          </ul>
        </section>

        <section className="space-y-3" aria-labelledby="p-bases">
          <h2 id="p-bases" className="font-display text-xl font-semibold text-brand">
            4. Bases legais (LGPD)
          </h2>
          <p>
            Tratamentos podem se apoiar, conforme o caso, em bases como execução de contrato, legítimo interesse (com avaliação de balanceamento), cumprimento de obrigação legal, consentimento quando exigido, ou exercício regular de direitos — sempre observada a finalidade informada e a legislação aplicável.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-compartilhamento">
          <h2 id="p-compartilhamento" className="font-display text-xl font-semibold text-brand">
            5. Compartilhamento
          </h2>
          <p>
            Podemos compartilhar dados com provedores que nos auxiliam a hospedar o site, analisar tráfego, enviar comunicações ou processar pagamentos (por exemplo, plataforma de infoprodutos). Esses fornecedores devem tratar os dados conforme instruções e finalidades compatíveis com esta Política, além de suas próprias obrigações legais.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-direitos">
          <h2 id="p-direitos" className="font-display text-xl font-semibold text-brand">
            6. Direitos do titular
          </h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação, portabilidade (quando aplicável), informação sobre compartilhamentos e revogação de consentimento, nos termos da LGPD. Para exercer direitos, utilize o canal indicado na seção “Controlador e contato” e, quando pertinente, também o suporte da plataforma onde a compra foi realizada.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-retencao">
          <h2 id="p-retencao" className="font-display text-xl font-semibold text-brand">
            7. Retenção
          </h2>
          <p>
            Mantemos dados pelo tempo necessário para cumprir as finalidades descritas, respeitar prazos legais e regulatórios, e preservar evidências em caso de disputa legítima, apagando ou anonimizando quando possível e adequado.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-cookies">
          <h2 id="p-cookies" className="font-display text-xl font-semibold text-brand">
            8. Cookies e tecnologias similares
          </h2>
          <p>
            Podemos utilizar cookies e tecnologias equivalentes para lembrar preferências, medir desempenho e entender o uso do site. Você pode gerenciar cookies no seu navegador; desativá-los pode afetar partes do funcionamento.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-seguranca">
          <h2 id="p-seguranca" className="font-display text-xl font-semibold text-brand">
            9. Segurança
          </h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger dados contra acessos não autorizados e incidentes. Nenhum sistema é totalmente isento de riscos; em caso de incidente relevante, comunicaremos conforme exigido pela lei.
          </p>
        </section>

        <section className="space-y-3" aria-labelledby="p-alteracoes">
          <h2 id="p-alteracoes" className="font-display text-xl font-semibold text-brand">
            10. Alterações desta Política
          </h2>
          <p>
            Podemos atualizar esta Política para refletir mudanças legais ou no funcionamento do site. A data da última atualização aparece no topo desta página.
          </p>
          <p className="rounded-xl border border-border bg-white/60 p-4 text-sm text-muted">
            Este modelo é genérico e educativo. Revise com seu advogado (CNPJ, bases legais por tratamento, cookies, DPO, transferência internacional e relação com a plataforma de vendas) antes de publicação definitiva.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
