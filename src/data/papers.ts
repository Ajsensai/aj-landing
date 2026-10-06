export interface PaperEntry {
  title: string;
  description?: string;
  pdfHref?: string;
  sourceHref?: string;
}

export const papers: PaperEntry[] = [
  {
    title: "Client side ds-sim implementation using FC",
    description:
      "A COMP3100 report covering the design and implementation of a DS-SIM client using a First Capable scheduling approach.",
    pdfHref: "/papers/ds-sim-report.pdf",
    sourceHref:
      "https://github.com/Ajsensai/aj-landing/tree/main/papers/ds-sim-report",
  },
];
