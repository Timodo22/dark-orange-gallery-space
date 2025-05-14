
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      title: "Interieur Ontwerp",
      description: "We creëren unieke, op maat gemaakte interieurconcepten die perfect aansluiten bij uw wensen, budget en levensstijl.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      items: [
        "Conceptontwikkeling",
        "Ruimtelijke indeling",
        "Kleur- en materiaaladvies",
        "Meubelkeuze en styling",
        "3D-visualisaties"
      ]
    },
    {
      title: "Projectmanagement",
      description: "We coördineren alle aspecten van uw project, van planning en budgettering tot uitvoering en oplevering.",
      image: "https://images.unsplash.com/photo-1664574653790-cee0e10a4242?auto=format&fit=crop&w=800&q=80",
      items: [
        "Planning en tijdlijn",
        "Budgetbeheer",
        "Leverancierscoördinatie",
        "Kwaliteitscontrole",
        "Opleveringsinspectie"
      ]
    },
    {
      title: "3D Visualisatie",
      description: "Met geavanceerde 3D-visualisaties geven we u een realistisch beeld van het eindresultaat voordat de werkzaamheden beginnen.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      items: [
        "Realistische renders",
        "Virtual reality tours",
        "Materiaal- en textuurvisualisatie",
        "Licht- en schaduwsimulatie",
        "Ontwerpiteraties"
      ]
    },
    {
      title: "Meubel Op Maat",
      description: "Onze ervaren meubelmakers creëren unieke, op maat gemaakte meubels die perfect passen bij uw interieur en behoeften.",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
      items: [
        "Uniek meubelontwerp",
        "Hoogwaardige materialen",
        "Vakmanschap",
        "Maatwerk kasten",
        "Duurzame producten"
      ]
    },
    {
      title: "Verlichting Advies",
      description: "De juiste verlichting kan een ruimte transformeren. Wij adviseren over de beste verlichtingsoplossingen voor uw interieur.",
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=800&q=80",
      items: [
        "Lichtplannen",
        "Sfeerverlichting",
        "Functionele verlichting",
        "Energiezuinige oplossingen",
        "Smart lighting systemen"
      ]
    },
    {
      title: "Renovatie & Verbouwing",
      description: "Van kleine renovaties tot complete verbouwingen, wij zorgen voor een vlekkeloos proces en hoogwaardig resultaat.",
      image: "https://images.unsplash.com/photo-1556909114-44e3e9699e2b?auto=format&fit=crop&w=800&q=80",
      items: [
        "Vergunningsaanvragen",
        "Constructieve aanpassingen",
        "Installatiewerk",
        "Afwerking",
        "Kwaliteitscontrole"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Kennismaking",
      description: "Tijdens een eerste gesprek bespreken we uw wensen, ideeën en budget. We leren uw stijl kennen en begrijpen wat u wilt bereiken."
    },
    {
      number: "02",
      title: "Conceptontwerp",
      description: "We ontwikkelen een conceptontwerp dat uw visie vertaalt naar concrete ideeën, inclusief moodboards, schetsen en materiaalvoorstellen."
    },
    {
      number: "03",
      title: "Detailontwerp",
      description: "Na uw feedback werken we het concept uit tot een gedetailleerd ontwerp met technische tekeningen, 3D-visualisaties en materiaalspecificaties."
    },
    {
      number: "04",
      title: "Planning & Begroting",
      description: "We stellen een gedetailleerd plan op met tijdlijn en begroting, zodat u precies weet wat te verwachten qua kosten en timing."
    },
    {
      number: "05",
      title: "Uitvoering",
      description: "Ons team van vakmensen voert het project uit volgens plan, met regelmatige updates en kwaliteitscontroles."
    },
    {
      number: "06",
      title: "Oplevering",
      description: "Na voltooiing doen we een grondige inspectie en lopen we samen door het eindresultaat om te zorgen dat alles aan uw verwachtingen voldoet."
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Onze Diensten</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Van concept tot realisatie, wij bieden een compleet pakket aan diensten om uw droominterieur te creëren.
            </p>
          </motion.div>

          {/* Services */}
          <div className="space-y-24 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange mr-2">✓</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Ons <span className="text-orange">Proces</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We hanteren een gestructureerde aanpak om ervoor te zorgen dat uw project soepel verloopt en het eindresultaat aan al uw verwachtingen voldoet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-lighter p-8 rounded-lg hover-scale border border-transparent hover:border-orange transition-colors"
                >
                  <span className="text-5xl font-bold text-orange block mb-4">{step.number}</span>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-lighter p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Klaar Om Uw <span className="text-orange">Droominterieur</span> Te Realiseren?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over uw wensen en ideeën.
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

export default ServicesPage;
