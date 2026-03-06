export const chatbotResponses: { [key: string]: string } = {
  'bonjour': 'Bonjour! Je suis ici pour vous aider. Comment puis-je vous assister aujourd\'hui?',
  'aide': 'Je peux vous aider avec des informations sur vos droits, la loi 103-13, comment porter plainte, et où trouver de l\'aide.',
  'loi 103-13': 'La loi 103-13 est la loi marocaine relative à la lutte contre les violences faites aux femmes. Elle définit plusieurs types de violence: physique, psychologique, sexuelle, et économique. Elle prévoit des peines pour les auteurs et des mesures de protection pour les victimes.',
  'porter plainte': 'Pour porter plainte, vous pouvez vous rendre au commissariat de police ou à la gendarmerie la plus proche. Vous pouvez également contacter le procureur du Roi. Il est recommandé de conserver toutes les preuves (photos, messages, certificats médicaux).',
  'violence': 'La violence peut prendre plusieurs formes: physique, psychologique, sexuelle, économique. Toutes sont punies par la loi. Si vous êtes victime, vous avez le droit à la protection et à l\'assistance.',
  'urgence': 'En cas d\'urgence immédiate, composez le 19 (police) ou le 177 (gendarmerie). Vous pouvez aussi contacter la ligne d\'écoute nationale: 8350.',
  'droits': 'En tant que victime, vous avez droit à: la protection, l\'assistance juridique gratuite, l\'accompagnement psychologique, un hébergement d\'urgence si nécessaire, et la confidentialité.',
  'protection': 'Vous pouvez demander une ordonnance de protection au juge de la famille. Cette ordonnance peut interdire à l\'agresseur de s\'approcher de vous et de vous contacter.',
  'default': 'Je comprends votre question. Pour des informations spécifiques, je vous recommande de consulter un avocat ou de contacter la ligne d\'écoute nationale au 8350. Vous pouvez aussi consulter nos ressources juridiques dans l\'application.'
};

export const getChatbotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();
  
  for (const [key, response] of Object.entries(chatbotResponses)) {
    if (message.includes(key)) {
      return response;
    }
  }
  
  return chatbotResponses.default;
};
