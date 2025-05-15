
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Over Ons</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leer meer over Kempas, onze visie en ons vakmanschap op het gebied van interieur, montage en betimmering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">
                Over <span className="text-orange">Kempas</span>
              </h2>
              <p className="text-gray-300">
                Kempas interieur, montage en betimmering verzorgt grote en kleine projecten voor woningen en bedrijven. 
                Planmatig, gestructureerd en altijd met oog voor detail: Kempas werkt graag voor de bovengemiddeld kritische opdrachtgever.
              </p>
              <p className="text-gray-300">
                "Quality means doing it right when no one is looking." – Henry Ford
              </p>
              <p className="text-gray-300">
                Bij Kempas geloven we dat elk detail telt. Of het nu gaat om een kleine renovatie of een compleet interieurproject, 
                wij brengen dezelfde toewijding en vakmanschap naar elk project dat we ondernemen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                  alt="Kempas interieur team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Erik van den Brand Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Erik van den Brand"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-orange">Erik van den Brand</span>
                </h2>
                <p className="text-gray-300 mb-4">
                  "Mijn naam is Erik van den Brand. Als oprichter en eigenaar van Kempas werk ik sinds 2005 aan uiteenlopende 
                  interieur- en renovatieprojecten voor zowel particuliere als zakelijke klanten."
                </p>
                <p className="text-gray-300 mb-4">
                  Met meer dan 15 jaar ervaring in de branche, breng ik een schat aan kennis en expertise naar elk project. 
                  Mijn passie voor vakmanschap en oog voor detail zorgen ervoor dat elk project dat we ondernemen voldoet aan 
                  de hoogste standaarden van kwaliteit.
                </p>
                <p className="text-gray-300">
                  Bij Kempas geloof ik in een persoonlijke aanpak. Ik werk nauw samen met onze klanten om hun visie te 
                  begrijpen en deze om te zetten in een interieur dat niet alleen esthetisch mooi is, maar ook perfect 
                  functioneert voor hun specifieke behoeften.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: "150+", label: "Afgeronde Projecten" },
              { value: "15+", label: "Jaar Ervaring" },
              { value: "45+", label: "Tevreden Klanten" },
              { value: "100%", label: "Kwaliteitsgarantie" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-dark-lighter p-8 rounded-lg text-center hover:border-orange transition-colors border border-transparent"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange mb-2">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Partnership Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-orange">Partnerschap</span>
            </h2>
            
            <div className="bg-dark-lighter p-8 rounded-lg mb-12">
              <p className="text-gray-300 mb-4">
                Wanneer een project of een opdrachtgever erom vraagt, werkt Kempas graag samen met partners en (interieur)architecten. 
                In de loop der jaren is er een sterk netwerk opgebouwd met mensen die hun vak uitstekend verstaan.
              </p>
              <p className="text-gray-300">
                Deze samenwerkingen stellen ons in staat om complete oplossingen te bieden voor zelfs de meest complexe projecten. 
                Van ontwerp tot realisatie, we werken samen met de beste professionals in de industrie om ervoor te zorgen dat 
                elk aspect van uw project wordt uitgevoerd met de grootste zorg en precisie.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-orange">Materialen en Leveranciers</span>
            </h2>
            
            <div className="bg-dark-lighter p-8 rounded-lg">
              <p className="text-gray-300 mb-4">
                Kempas werkt nauw samen met goede leveranciers en architecten en is up-to-date met bemonstering van de beste en nieuwste materialen.
                Samen bieden we maatwerk interieurglas en spiegels, kussenstoffering, interieurstaal, natuursteen, composiet en spuitwerk.
              </p>
              <p className="text-gray-300">
                We selecteren onze materialen zorgvuldig op basis van kwaliteit, duurzaamheid en esthetiek. Onze relaties met 
                leveranciers stellen ons in staat om toegang te hebben tot de nieuwste en meest hoogwaardige materialen in de industrie, 
                zodat we voor elk project de perfecte oplossing kunnen bieden.
              </p>
            </div>
          </motion.div>

          {/* Work Process Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Ons <span className="text-orange">Werkproces</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange"></div>
              
              {/* Timeline items */}
              {[
                {
                  title: "Eerste Gesprek",
                  description: "We beginnen met een gesprek om uw wensen, behoeften en visie te begrijpen."
                },
                {
                  title: "Conceptontwikkeling",
                  description: "We ontwikkelen een concept dat aansluit bij uw wensen en budget."
                },
                {
                  title: "Gedetailleerd Ontwerp",
                  description: "We werken het concept uit tot een gedetailleerd ontwerp met materiaalkeuzes."
                },
                {
                  title: "Planning & Productie",
                  description: "We plannen het project zorgvuldig en beginnen met de productie van maatwerkelementen."
                },
                {
                  title: "Realisatie",
                  description: "Met precisie en vakmanschap realiseren we het ontwerp in uw ruimte."
                }
              ].map((item, index) => (
                <div key={index} className="relative mb-16">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-orange border-4 border-dark z-10"></div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 p-4">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`bg-dark-lighter p-6 rounded-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                      >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Klaar Om Met Ons <span className="text-orange">Samen Te Werken?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Of u nu op zoek bent naar een compleet interieurontwerp voor uw woning, een renovatie van uw kantoor, 
              of advies over uw horecagelegenheid - we staan klaar om u te helpen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                <Link to="/contact">Neem Contact Op</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
                <Link to="/projecten">Bekijk Onze Projecten</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
