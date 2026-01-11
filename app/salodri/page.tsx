import { Truck, Building2, Package, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function SalodriLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="w-8 h-8" />
            <h1 className="text-2xl font-bold">SALODRI SARL</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-blue-300 transition">Services</a>
            <a href="#about" className="hover:text-blue-300 transition">À Propos</a>
            <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition"
          >
            Devis Gratuit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Votre Partenaire de Confiance pour Tous Vos Besoins
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Transport de marchandises, travaux de bâtiment, et fournitures de bureau - 
              Une solution complète pour votre entreprise au Maroc
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center gap-2"
              >
                Contactez-nous <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Nos Services
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
                  <div className="text-sm">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-sm">Clients Satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-sm">Service Disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-sm">Satisfaction Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes et professionnelles adaptées à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Transport */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Transport de Marchandises</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Transport national et régional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Livraison express et standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Flotte moderne et entretenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Suivi en temps réel</span>
                </li>
              </ul>
              <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Construction */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Travaux de Bâtiment</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Construction et rénovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Maçonnerie et gros œuvre</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Finitions et aménagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Respect des délais</span>
                </li>
              </ul>
              <a href="#contact" className="text-orange-600 font-semibold hover:text-orange-800 flex items-center gap-2">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Office Supplies */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fournitures de Bureau</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Mobilier et équipement de bureau</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Fournitures et consommables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Solutions personnalisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Livraison et installation</span>
                </li>
              </ul>
              <a href="#contact" className="text-green-600 font-semibold hover:text-green-800 flex items-center gap-2">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi Choisir SALODRI SARL ?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Avec plus de 10 ans d'expérience, SALODRI SARL s'est imposée comme un acteur 
              majeur dans le secteur du transport, de la construction et des fournitures de bureau au Maroc.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expertise Professionnelle</h4>
                  <p className="text-gray-600">Une équipe qualifiée et expérimentée à votre service</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Qualité Garantie</h4>
                  <p className="text-gray-600">Des prestations de haute qualité certifiées</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Prix Compétitifs</h4>
                  <p className="text-gray-600">Les meilleurs tarifs du marché sans compromis sur la qualité</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nos Valeurs</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold">Fiabilité</span> - Respect des engagements
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="font-semibold">Transparence</span> - Communication claire
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-semibold">Excellence</span> - Qualité supérieure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold">Innovation</span> - Solutions modernes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contactez-Nous</h2>
            <p className="text-xl text-gray-300">
              Notre équipe est à votre disposition pour répondre à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Téléphone</h4>
                  <p className="text-gray-300">+212 6XX XX XX XX</p>
                  <p className="text-gray-300">+212 5XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">contact@salodri.ma</p>
                  <p className="text-gray-300">info@salodri.ma</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>
                  <p className="text-gray-300">
                    Casablanca, Maroc<br />
                    [Adresse complète]
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-800">
                <h4 className="font-bold mb-3 text-lg">Horaires d'ouverture</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 9h00 - 13h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Nom Complet *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Téléphone *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+212 6XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Transport de marchandises</option>
                    <option>Travaux de bâtiment</option>
                    <option>Fournitures de bureau</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Message *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  Envoyer le Message <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="w-6 h-6" />
            <span className="text-xl font-bold">SALODRI SARL</span>
          </div>
          <p className="text-gray-400 mb-4">
            Votre partenaire de confiance pour le transport, la construction et les fournitures de bureau
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 SALODRI SARL. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}