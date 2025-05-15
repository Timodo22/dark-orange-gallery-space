
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { getFeaturedProjects } from '@/data/projects';

const Home = () => {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2000&q=80"
            alt="Modern interior design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-orange">Kempas</span> Interieur, Montage en Betimmering
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Planmatig, gestructureerd en altijd met oog voor detail: Kempas werkt graag voor de bovengemiddeld kritische opdrachtgever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                <Link to="/projecten">Bekijk Ons Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
                <Link to="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-orange">Kwaliteit</span> en Precisie Sinds 2005
              </h2>
              <p className="text-gray-300 mb-6">
                Kempas interieur, montage en betimmering verzorgt grote en kleine projecten voor woningen en bedrijven. 
                Wij werken planmatig, gestructureerd en altijd met oog voor detail.
              </p>
              <p className="text-gray-300 mb-6">
                "Quality means doing it right when no one is looking." – Henry Ford
              </p>
              <p className="text-gray-300 mb-6">
                Of het nu gaat om een volledig interieurproject voor uw woning, een renovatie van uw kantoor, of 
                maatwerk voor uw horecagelegenheid - wij staan klaar om uw visie werkelijkheid te maken met vakmanschap en precisie.
              </p>
              <Button className="bg-orange hover:bg-orange-dark text-white mt-4">
                <Link to="/over-ons">Lees Meer Over Ons</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior design studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange rounded-lg flex items-center justify-center p-6 text-center">
                <span className="text-white font-semibold">Meer dan 15+ jaar ervaring</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Onze <span className="text-orange">Uitgelichte</span> Projecten
              </h2>
              <p className="text-gray-300 mt-2">
                Ontdek een selectie van onze meest recente en indrukwekkende projecten
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                <Link to="/projecten">Bekijk Alle Projecten</Link>
              </Button>
            </motion.div>
          </div>

          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Onze <span className="text-orange">Diensten</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Van concept tot realisatie, wij bieden een compleet pakket aan diensten om uw droominterieur te creëren
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interieur Ontwerp",
                description: "Ons ontwerpteam creëert unieke, op maat gemaakte interieurconcepten die perfect aansluiten bij uw wensen en levensstijl.",
                icon: "✏️"
              },
              {
                title: "Projectmanagement",
                description: "We coördineren alle aspecten van uw project, van planning en budgettering tot uitvoering en oplevering.",
                icon: "📋"
              },
              {
                title: "3D Visualisatie",
                description: "Met geavanceerde 3D-visualisaties geven we u een realistisch beeld van het eindresultaat voordat de werkzaamheden beginnen.",
                icon: "🖥️"
              },
              {
                title: "Meubel Op Maat",
                description: "Onze ervaren meubelmakers creëren unieke, op maat gemaakte meubels die perfect passen bij uw interieur en behoeften.",
                icon: "🪑"
              },
              {
                title: "Verlichting Advies",
                description: "De juiste verlichting kan een ruimte transformeren. Wij adviseren over de beste verlichtingsoplossingen voor uw interieur.",
                icon: "💡"
              },
              {
                title: "Renovatie & Verbouwing",
                description: "Van kleine renovaties tot complete verbouwingen, wij zorgen voor een vlekkeloos proces en hoogwaardig resultaat.",
                icon: "🏗️"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark p-8 rounded-lg hover-scale border border-gray-800"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange">Partnerschap</span> & Materialen
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Samenwerken voor het beste resultaat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-dark-lighter p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Partnerschap</h3>
              <p className="text-gray-300 mb-4">
                Wanneer een project of een opdrachtgever erom vraagt, werkt Kempas graag samen met partners en (interieur)architecten. 
                In de loop der jaren is er een sterk netwerk opgebouwd met mensen die hun vak uitstekend verstaan.
              </p>
              <p className="text-gray-300">
                Door onze sterke samenwerkingsverbanden kunnen wij u een compleet pakket aan diensten aanbieden, 
                waarbij kwaliteit en vakmanschap altijd voorop staan.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dark-lighter p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Materialen en Leveranciers</h3>
              <p className="text-gray-300 mb-4">
                Kempas werkt nauw samen met goede leveranciers en architecten en is up-to-date met bemonstering van de beste en nieuwste materialen.
              </p>
              <p className="text-gray-300">
                Samen bieden we maatwerk interieur zoals glas en spiegels, kussenstoffering, interieurstaal, natuursteen, composiet en spuitwerk.
                Hierdoor kunnen we voor elk project de perfecte materialen selecteren die passen bij uw wensen en budget.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80"
            alt="Interior design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar Om Uw <span className="text-orange">Droominterieur</span> Te Realiseren?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over uw wensen en ideeën.
            </p>
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
              <Link to="/contact">Plan Een Gesprek</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
