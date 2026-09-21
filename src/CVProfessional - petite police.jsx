import React from 'react';

export default function CVProfessional() {
  return (
    <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white p-6 print:p-4 text-gray-900 font-sans text-[10px] leading-tight print:shadow-none shadow-lg">
      
      {/* Header avec photo */}
      <div className="flex items-start gap-4 border-b-4 border-blue-900 pb-4 mb-4">
        {/* Photo de profil - plus grande comme demandé */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full border-4 border-blue-900 overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* Remplacer src par votre photo réelle */}
            <img 
              src="/photo-cyril.jpg" 
              alt="Cyril Gourdon" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="hidden text-gray-500 text-xs text-center px-2">Photo</span>
          </div>
        </div>
        
        {/* Infos principales */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-blue-900 mb-0.5">CYRIL GOURDON</h1>
          <p className="text-sm font-semibold text-gray-700 mb-2">Ingénieur Industriel – Technico-Commercial – Consultant IA</p>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[9px] text-gray-600">
            <span>📍 27, rue Paul Deviolaine, 02200 Soissons</span>
            <span>📞 06 15 60 33 44</span>
            <span>📧 cyril.gourdon.02@gmail.com</span>
            <span>🔗 linkedin.com/in/cyril-gourdon/</span>
          </div>
        </div>
      </div>

      {/* Profil */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-blue-900 mb-1.5 pb-1 border-b border-gray-300">PROFIL</h2>
        <p className="text-[9px] leading-relaxed text-justify">
          Ingénieur en Génie Mécanique (<strong>25+ ans d'expérience industrielle</strong>), reconverti en consultant IA et actif dans le développement commercial B2B de solutions techniques. 
          Double profil technico-commercial permettant d'accompagner les clients de la conception à la mise en œuvre. 
          Basé dans l'Aisne, je recherche de nouveaux challenges dans les secteurs industriel et/ou formation IA sur les Hauts-de-France.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Colonne gauche - Expériences */}
        <div className="col-span-2">
          <h2 className="text-sm font-bold text-blue-900 mb-2 pb-1 border-b border-gray-300">EXPÉRIENCES PROFESSIONNELLES</h2>
          
          {[
            {
              title: "Technico-Commercial B2B",
              period: "2026 – En cours",
              company: "API Plastiques – Hauts-de-France",
              tasks: [
                "Développement et gestion d'un portefeuille clients B2B en solutions plastiques techniques",
                "Accompagnement des clients de la conception à la mise en œuvre des solutions",
                "Prospection commerciale et fidélisation sur la région Hauts-de-France",
                "Support technique et SAV auprès des clients industriels"
              ]
            },
            {
              title: "Consultant en Intelligence Artificielle",
              period: "Août 2025 – Décembre 2025",
              company: "AliciA-GPT – Soissons (02)",
              tasks: [
                "Audit des PME/TPE pour l'intégration de l'IA dans leurs processus métiers",
                "Formation d'équipes à l'adoption d'outils IA (NotebookLM, ChatGPT, Comet)",
                "Développement d'outils IA sur mesure en local (Ollama, LM Studio, Gemini)",
                "Création de systèmes RAG et workflows avec N8N, Make"
              ]
            },
            {
              title: "Responsable Montage & SAV",
              period: "Jan. 2025 – Août 2025",
              company: "AFHYMAT – Roye (80)",
              tasks: [
                "Encadrement d'une équipe de mécaniciens et montée en compétences",
                "Organisation des interventions SAV, chiffrage des coûts, respect des délais"
              ]
            },
            {
              title: "Commercial Web",
              period: "Mars – Sept. 2024",
              company: "Triangle HiFi – Soissons (02)",
              tasks: [
                "Gestion du service client e-commerce (Shopify, Freshdesk, SAGE 100)"
              ]
            },
            {
              title: "Responsable de Production",
              period: "Avr. 2023 – Jan. 2024",
              company: "Barytine et Minéraux – Chaillac (36)",
              tasks: [
                "Analyses fonctionnelles AMDEC, planification production & maintenance, analyse des KPI"
              ]
            },
            {
              title: "Responsable de Production",
              period: "Jan. 2001 – Mars 2010",
              company: "UZIN – Soissons (02)",
              tasks: [
                "Coordination des équipes techniques et ordonnancement SAP"
              ]
            },
            {
              title: "Responsable Prototype",
              period: "Juin 1997 – Déc. 2000",
              company: "Liebherr – Colmar (68)",
              tasks: [
                "Optimisation des processus de prototypage avec ERP BAAN"
              ]
            }
          ].map((exp, idx) => (
            <div key={idx} className="mb-3 pb-2 border-b border-gray-100 last:border-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-[10px] text-blue-800">{exp.title}</h3>
                <span className="text-[9px] text-gray-500 whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-[9px] italic text-gray-600">{exp.company}</p>
              <ul className="text-[9px] mt-1 space-y-0.5 ml-3 text-gray-700">
                {exp.tasks.map((task, i) => (
                  <li key={i}>• {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Colonne droite - Compétences, Langues, Formation */}
        <div className="space-y-4">
          
          {/* Compétences */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 mb-2 pb-1 border-b border-gray-300">COMPÉTENCES</h2>
            
            <div className="mb-3">
              <h3 className="font-bold text-[9px] text-gray-800 mb-1">Intelligence Artificielle</h3>
              <p className="text-[9px] leading-relaxed text-gray-700">
                ChatGPT, Claude, Gemini, Mistral, Ollama, LM Studio, NotebookLM, N8N, Make, RAG, Cursor, AI Studio
              </p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-bold text-[9px] text-gray-800 mb-1">ERP & Production</h3>
              <p className="text-[9px] leading-relaxed text-gray-700">
                SAP, Dynamics, BAAN, SolidWorks, AMDEC, KPI, Ordonnancement, SAV, Shopify, Freshdesk, SAGE 100
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[9px] text-gray-800 mb-1">Soft Skills</h3>
              <p className="text-[9px] leading-relaxed text-gray-700">
                Empathie, service client, écoute active, relationnel B2B, rigueur, flexibilité
              </p>
            </div>
          </div>

          {/* Langues */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 mb-2 pb-1 border-b border-gray-300">LANGUES</h2>
            <div className="space-y-0.5">
              <p className="text-[9px]">🇫🇷 Français (Natif)</p>
              <p className="text-[9px]">🇩🇪 Allemand (Courant)</p>
              <p className="text-[9px]">🇬🇧 Anglais (Courant)</p>
            </div>
          </div>

          {/* Formation */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 mb-2 pb-1 border-b border-gray-300">FORMATION</h2>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-[9px]">Bachelor Web Developer</p>
                <p className="text-[9px] text-gray-600">DigitalCampus (2021)</p>
              </div>
              <div>
                <p className="font-bold text-[9px]">DESS Génie Mécanique</p>
                <p className="text-[9px] text-gray-600">Université de Metz (1996)</p>
              </div>
              <div>
                <p className="font-bold text-[9px]">Dipl. Ing. Maschinenbau</p>
                <p className="text-[9px] text-gray-600">FH Saarbrück, DE (1995)</p>
              </div>
            </div>
          </div>

          {/* Autres expériences */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 mb-2 pb-1 border-b border-gray-300">AUTRES</h2>
            <p className="text-[9px] mb-1"><strong>2010–2020:</strong> Entrepreneur – Tapissier Ameublement</p>
            <p className="text-[9px]"><strong>2020–2021:</strong> Professeur de Mathématiques</p>
          </div>

        </div>
      </div>

      {/* Styles d'impression */}
      <style jsx global>{`
        @media print {
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          .print\\:p-4 { padding: 4mm !important; }
          .print\\:shadow-none { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}