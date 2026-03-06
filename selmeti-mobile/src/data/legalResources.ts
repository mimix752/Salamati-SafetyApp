import { LegalResource } from '../types';

export const mockLegalResources: LegalResource[] = [
  {
    id: '1',
    title: 'Loi 103-13 sur la violence contre les femmes',
    description: 'Texte complet de la loi marocaine relative à la lutte contre les violences faites aux femmes.',
    category: 'Législation',
    pdfUrl: 'https://example.com/loi-103-13.pdf'
  },
  {
    id: '2',
    title: 'Vos droits en tant que victime',
    description: 'Guide complet expliquant les droits des victimes de violence au Maroc.',
    category: 'Droits',
    pdfUrl: 'https://example.com/droits-victimes.pdf'
  },
  {
    id: '3',
    title: 'Comment porter plainte',
    description: 'Procédure détaillée pour déposer une plainte auprès des autorités compétentes.',
    category: 'Procédures',
    pdfUrl: 'https://example.com/porter-plainte.pdf'
  },
  {
    id: '4',
    title: 'Ordonnance de protection',
    description: 'Comment obtenir une ordonnance de protection en cas de danger imminent.',
    category: 'Protection',
    pdfUrl: 'https://example.com/ordonnance-protection.pdf'
  },
  {
    id: '5',
    title: 'Centres d\'écoute et d\'assistance',
    description: 'Liste des centres d\'écoute et d\'assistance disponibles au Maroc.',
    category: 'Assistance',
    pdfUrl: 'https://example.com/centres-ecoute.pdf'
  },
  {
    id: '6',
    title: 'Violence économique',
    description: 'Comprendre et identifier la violence économique selon la loi 103-13.',
    category: 'Types de violence',
    pdfUrl: 'https://example.com/violence-economique.pdf'
  }
];
