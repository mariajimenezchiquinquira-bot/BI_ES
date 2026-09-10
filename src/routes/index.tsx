import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import {
  CardBlock,
  DocsLink,
  GithubLink,
  ProjectCard,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import weworkValuation from "@/assets/projects/wework-valuation.png";
import weworkTimeline from "@/assets/projects/wework-timeline.png";
import weworkLossesDonut from "@/assets/projects/wework-losses-donut.png";
import budlightRanking from "@/assets/projects/budlight-ranking.png";
import budlightMarketShare from "@/assets/projects/budlight-market-share.png";
import budlightSalesVolume from "@/assets/projects/budlight-sales-volume.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Portafolio de Business Intelligence" },
      {
        name: "description",
        content:
          "Portafolio de María José Jiménez, estudiante de Ingeniería Industrial especializada en Business Intelligence, visualización de datos y analítica para fintech y productos digitales.",
      },
      { property: "og:title", content: "María José Jiménez — Portafolio de Business Intelligence" },
      {
        property: "og:description",
        content:
          "Proyectos basados en datos e IA en analítica, automatización y producto, con enfoque en fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Business Intelligence",
  "Visualización de Datos",
  "Análisis de Negocio",
  "Análisis de Datos",
  "Análisis Financiero",
  "Automatización",
  "IA Generativa",
  "Mejora de Procesos",
  "Metodologías Ágiles (Scrum, Kanban)",
  "Tableau",
  "Power BI",
  "Python",
  "SQL",
  "Excel",
  "Power Automate",
  "R",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portafolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Estudiante de Ingeniería Industrial
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Proyectos
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="WeWork: El Colapso Estratégico de un Modelo de Negocio de $47.000M"
              tech={["Caso de Negocio", "Análisis Estratégico", "Business Understanding"]}
              actions={
                <DocsLink href="/docs/WeWork_Case_Study_Analysis.pdf" label="Ver Análisis Completo" />
              }
            >
              <CardBlock label="Problema">
                WeWork alcanzó una valoración de $47.000 millones en enero de 2019, pero se
                declaró en bancarrota en noviembre de 2023. Su modelo dependía de compromisos de
                arrendamiento a largo plazo mientras generaba ingresos mediante membresías
                flexibles de corto plazo, creando una exposición financiera significativa cuando
                la demanda se debilitó. ¿Qué decisiones estratégicas impulsaron este colapso?
              </CardBlock>
              <CardBlock label="Enfoque">
                Analicé su modelo de arrendamiento a largo plazo y subarriendo flexible, la
                cultura de gasto bajo el liderazgo de Adam Neumann, y las fallas de gobernanza
                previas al IPO de 2019. El análisis se enfocó en la relación entre la expansión
                agresiva, la sostenibilidad financiera y la gestión de riesgo.
              </CardBlock>
              <CardBlock label="Resultado">
                WeWork pasó de $47.000 millones a la bancarrota, acumulando $11.400 millones en
                pérdidas netas entre 2020 y mediados de 2023. El colapso fue impulsado por un
                desajuste estructural de riesgo, una expansión sin rentabilidad comprobada y una
                gobernanza débil.
              </CardBlock>
              <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr_1fr]">
                <a
                  href={weworkTimeline}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkTimeline}
                    alt="Línea de tiempo de las decisiones estratégicas clave de WeWork"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkValuation}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkValuation}
                    alt="Valoración de WeWork desde el pico de 2019 hasta la bancarrota de 2023"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkLossesDonut}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkLossesDonut}
                    alt="Pérdidas netas acumuladas de WeWork 2020-2023"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Bud Light / AB InBev: El Costo de una Decisión de Marketing"
              tech={["Caso de Negocio", "Análisis Estratégico", "Business Understanding"]}
              actions={
                <DocsLink href="/docs/BudLight_Case_Study_Analysis.pdf" label="Ver Análisis Completo" />
              }
            >
              <CardBlock label="Problema">
                A comienzos de 2023, Bud Light era la cerveza más vendida en Estados Unidos. Una
                campaña de marketing generó un fuerte rechazo público que afectó las ventas y el
                posicionamiento de la marca, costándole a AB InBev más de $1.000 millones en
                pérdidas.
              </CardBlock>
              <CardBlock label="Enfoque">
                Analicé la decisión de marketing, la respuesta de gestión de crisis y su impacto
                en ventas, participación de mercado y valor de marca.
              </CardBlock>
              <CardBlock label="Resultado">
                Bud Light cayó del puesto #1 al #3, mientras que el volumen de ventas cayó casi
                un 30% interanual. El caso mostró que una comunicación poco clara y una respuesta
                de crisis inconsistente pueden amplificar el impacto de una controversia y
                erosionar la posición competitiva de una marca.
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: budlightRanking, alt: "Ranking de marcas de cerveza en EE. UU. antes y después del boicot de 2023" },
                  { src: budlightMarketShare, alt: "Participación de mercado de cerveza en EE. UU. por marca en 2024" },
                  { src: budlightSalesVolume, alt: "Volumen de ventas de Bud Light antes y después del boicot" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Análisis de Fuga de Clientes y Pérdida de Capital"
              tech={["Power BI", "DAX", "Visualización de Datos"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problema">
                Un banco enfrentaba fuga de clientes sin identificar sus principales causas ni
                su impacto en el capital.
              </CardBlock>
              <CardBlock label="Enfoque">
                Realicé un análisis exploratorio en Power BI mediante visualizaciones y
                comparaciones para identificar los patrones que mejor explicaban la fuga y los
                segmentos de mayor riesgo.
              </CardBlock>
              <CardBlock label="Resultados">
                El banco enfrenta una fuga de capital concentrada en clientes de alto saldo,
                generando un impacto financiero significativo. La principal señal de alerta es la
                inactividad, especialmente en Alemania, donde se registra la mayor tasa de fuga.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Dashboard de Power BI: Análisis de Fuga de Clientes y Pérdida de Capital"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Habilidades
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
