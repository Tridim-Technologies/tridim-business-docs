export type DocumentInfo = {
  slug: string;
  title: string;
  description: string;
};

export const documents: DocumentInfo[] = [
  { slug: "roadmap", title: "Roadmap", description: "Milestones, priorities, and delivery evidence." },
  { slug: "architecture", title: "Architecture", description: "Application boundaries, data flow, and current technical choices." },
  { slug: "api-explorer", title: "API explorer", description: "Searchable catalog of the current internal-alpha HTTP routes." },
  { slug: "product/workflow", title: "Product workflow", description: "How customers, quotations, delivery, time, expenses, and finance connect." },
  { slug: "product/capabilities", title: "Capabilities", description: "What the open-source platform supports today and its current limits." },
  { slug: "product/security-and-data", title: "Security and data", description: "Current safeguards, data boundaries, and known limitations." },
  { slug: "guides/sales-and-delivery", title: "Sales and delivery", description: "Customer, quotation, and job workflows." },
  { slug: "guides/time-and-expenses", title: "Time and expenses", description: "Staff time, expense claims, and evidence handling." },
  { slug: "guides/evidence-recovery", title: "Evidence recovery", description: "Synthetic deletion replay and production recovery requirements." },
  { slug: "guides/people-and-teams", title: "People and teams", description: "Organization membership, work profiles, and role boundaries." },
  { slug: "guides/finance-operations", title: "Finance operations", description: "Invoices, receipts, allocations, reversals, and sandbox attempts." },
  { slug: "guides/inventory", title: "Inventory", description: "Products, locations, stock balances, and auditable movements." },
  { slug: "status", title: "Current status", description: "What is implemented and what remains in progress." },
];
