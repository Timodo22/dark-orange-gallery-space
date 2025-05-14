
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
              Leer meer over Studio Design, onze visie en ons team van getalenteerde interieur ontwerpers en bouwers.
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
                Onze <span className="text-orange">Visie</span>
              </h2>
              <p className="text-gray-300">
                Bij Studio Design geloven we dat een goed ontworpen ruimte meer is dan alleen esthetiek - het moet functioneel zijn, 
                uw persoonlijkheid weerspiegelen en positief bijdragen aan uw dagelijks leven.
              </p>
              <p className="text-gray-300">
                Opgericht in 2010, hebben we ons ontwikkeld tot een team van gepassioneerde ontwerpers en vakmannen die ieder project 
                benaderen met creativiteit, precisie en een diepgaand begrip van de behoeften van onze klanten.
              </p>
              <p className="text-gray-300">
                Onze filosofie is eenvoudig: luisteren naar uw wensen, uw levensstijl begrijpen en een ruimte creëren die perfect bij u 
                past. Of het nu gaat om een woonkamer die uw persoonlijkheid weerspiegelt, een functioneel kantoor dat productiviteit stimuleert, 
                of een horecagelegenheid die klanten aantrekt - we streven naar perfectie in elk detail.
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
                  alt="Studio Design team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>

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
              { value: "12", label: "Design Awards" }
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

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Ons <span className="text-orange">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Emma de Vries",
                  role: "Hoofd Ontwerper",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
                  bio: "Met meer dan 10 jaar ervaring leidt Emma ons ontwerpteam met visie en creativiteit."
                },
                {
                  name: "Thomas Berg",
                  role: "Interieurarchitect",
                  image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=400&q=80",
                  bio: "Thomas specialiseert zich in het creëren van innovatieve en functionele ruimtes."
                },
                {
                  name: "Sophie Jansen",
                  role: "Project Manager",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
                  bio: "Sophie zorgt ervoor dat elk project soepel verloopt, van concept tot realisatie."
                },
                {
                  name: "Lars Bakker",
                  role: "Hoofdaannemer",
                  image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
                  bio: "Met zijn expertise zorgt Lars voor de hoogste kwaliteit in de uitvoering van onze ontwerpen."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-lighter rounded-lg overflow-hidden hover-scale"
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white">{member.bio}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-orange">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Onze <span className="text-orange">Geschiedenis</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange"></div>
              
              {/* Timeline items */}
              {[
                {
                  year: "2010",
                  title: "Oprichting Studio Design",
                  description: "Emma de Vries start Studio Design met een team van drie ontwerpers."
                },
                {
                  year: "2013",
                  title: "Eerste Grote Opdracht",
                  description: "Renovatie van een historisch pand in het centrum van Amsterdam."
                },
                {
                  year: "2016",
                  title: "Uitbreiding Team & Diensten",
                  description: "Groei naar een team van 10 professionals en toevoeging van eigen meubelproductie."
                },
                {
                  year: "2019",
                  title: "Internationale Erkenning",
                  description: "Eerste internationale design award voor een hotelier project in Berlijn."
                },
                {
                  year: "2022",
                  title: "Huidige Dag",
                  description: "Een gevestigde naam in de wereld van interieurontwerp met meer dan 150 succesvolle projecten."
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
                        <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-orange text-white mb-2">
                          {item.year}
                        </span>
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
