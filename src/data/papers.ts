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
  {
    title:
      "Applications of Blockchain and Internet of Vehicles (IoV): security challenges and proposed solutions",
    description:
      "A technical report exploring IoV security concerns, fault tolerance and the use of blockchain-based approaches to improve trust and authenticity.",
    pdfHref: "/papers/iov-blockchain.pdf",
    sourceHref:
      "https://github.com/Ajsensai/aj-landing/blob/main/papers/iov-blockchain/source.zip",
  },
];
