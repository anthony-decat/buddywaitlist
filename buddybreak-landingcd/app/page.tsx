/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import { Users, Clock, PiggyBank, Plane, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

interface CustomAlertProps {
  title: string;
  description: string;
}

interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent<Element>) => void;
}

const CustomAlert = ({ title, description }: CustomAlertProps) => (
  <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 transform transition-all duration-500 ease-out">
    <div className="absolute top-0 left-0 w-2 h-full bg-green-500" />
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-6 h-6 text-green-600" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-green-800 text-lg">{title}</h3>
        <p className="text-green-700 mt-1 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const WaitlistForm = ({ email, setEmail, onSubmit }: WaitlistFormProps) => (
  <form onSubmit={onSubmit} className="space-y-5 relative">
    <div className="space-y-2.5">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Rejoignez la liste d'attente
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl 
                    focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200
                    hover:border-orange-300 hover:shadow-md placeholder-gray-400 text-gray-900"
          required
        />
      </div>
    </div>
    
    <button 
      type="submit"
      className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-size-200 bg-pos-0 
                text-white py-4 rounded-xl font-semibold hover:bg-pos-100 transition-all duration-500
                transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                flex items-center justify-center space-x-3"
    >
      <span>M'inscrire à la liste d'attente</span>
      <ArrowRight className="w-5 h-5 animate-pulse" />
    </button>
    
    <div className="pt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
      <div className="flex items-center">
        <Users className="w-4 h-4 mr-1.5 text-orange-500" />
        <span>2000+ inscrits</span>
      </div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1.5 text-orange-500" />
        <span>Lancement imminent</span>
      </div>
    </div>
  </form>
);

export default function LandingPage(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-500">BuddyBreak</h1>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full 
                           hover:shadow-lg hover:scale-105 transition-all duration-300">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section with enhanced gradients */}
      <section className="relative bg-gradient-to-b from-orange-100 via-orange-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32 fill-white" viewBox="0 0 1440 128" preserveAspectRatio="none">
            <path d="M0 128h1440V30C1160 10 920 0 720 0 520 0 280 10 0 30v98z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-24 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
              <div className="space-y-8 mb-12">
                <h1 className="text-6xl font-bold leading-tight text-gray-900">
                  Du rêve à la réalité : <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Voyagez enfin</span> avec vos amis !
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformez l&apos;organisation chaotique de voyages entre amis en une expérience fluide et collaborative.
                </p>
              </div>

              {/* Enhanced Waitlist Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 rounded-2xl transform rotate-1 scale-105 opacity-50" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6 border border-orange-100/50">
                  <div className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-orange-100/80 to-orange-50/80 rounded-full border border-orange-200/50">
                    <PiggyBank className="w-5 h-5 text-orange-600 mr-2.5" />
                    <p className="text-sm font-medium text-gray-900">
                      Accès premium offert aux premiers inscrits
                    </p>
                  </div>

                  {submitted ? (
                    <CustomAlert 
                      title="Merci de votre inscription !"
                      description="Nous vous contacterons dès que BuddyBreak sera disponible."
                    />
                  ) : (
                    <WaitlistForm 
                      email={email}
                      setEmail={setEmail}
                      onSubmit={handleSubmit}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right Image with enhanced styling */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-200 rounded-full filter blur-3xl opacity-20" />
              <Image 
                src="/images/hero.png" 
                alt="Travel Planning" 
                width={500}
                height={400}
                className="w-[85%] h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced transitions */}
      <section className="relative container mx-auto px-4 py-20 max-w-5xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center w-full">
          <div className="flex-grow h-px bg-gradient-to-l from-orange-300 to-transparent"></div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-3 h-3 rounded-full mx-4 animate-pulse"></div>
          <div className="flex-grow h-px bg-gradient-to-r from-orange-300 to-transparent"></div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Pourquoi choisir BuddyBreak ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature cards with enhanced hover effects */}
          <div className="group bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-xl p-8 border border-orange-100 
                        hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto 
                          group-hover:shadow-orange-200 transition-shadow duration-500">
              <Users className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">85%</h3>
            <p className="text-gray-600 font-medium">de voyages concrétisés</p>
            <p className="mt-4 text-gray-500 text-sm">Notre processus démocratique garantit l'engagement de chacun</p>
          </div>
          
          <div className="group bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-xl p-8 border border-orange-100 
                        hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto 
                          group-hover:shadow-orange-200 transition-shadow duration-500">
              <PiggyBank className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">30%</h3>
            <p className="text-gray-600 font-medium">d'économies en moyenne</p>
            <p className="mt-4 text-gray-500 text-sm">Bons plans exclusifs et tarifs négociés pour les étudiants</p>
          </div>
          
          <div className="group bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-xl p-8 border border-orange-100 
                        hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto 
                          group-hover:shadow-orange-200 transition-shadow duration-500">
              <Plane className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">2000+</h3>
            <p className="text-gray-600 font-medium">voyages planifiés</p>
            <p className="mt-4 text-gray-500 text-sm">Rejoignez la communauté BuddyBreak en pleine croissance</p>
          </div>
        </div>
      </section>

      {/* How it Works Section with enhanced transitions */}
      <section className="relative py-24 bg-gradient-to-b from-white via-orange-100 to-orange-50">
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-32 fill-white transform rotate-180" viewBox="0 0 1440 128" preserveAspectRatio="none">
            <path d="M0 128h1440V30C1160 10 920 0 720 0 520 0 280 10 0 30v98z" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-10" />

        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et intuitif pour concrétiser vos voyages entre amis
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Enhanced connecting line with gradient and animation */}
            <div className="absolute top-24 left-[15%] right-[15%] h-1 hidden md:block">
              <div className="h-full bg-gradient-to-r from-transparent via-orange-300 to-transparent animate-pulse" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
            </div>
            
            <div className="grid md:grid-cols-4 gap-16 relative">
              {/* Step 1 */}
              <div className="group relative bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-xl -z-10" />
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto -mt-10 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">1</div>
                <Image src="/api/placeholder/200/120" width={200} height={120} alt="Créer un voyage" className="rounded-lg mb-4 mx-auto transform transition-all duration-500 group-hover:shadow-xl" />
                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">Créer un voyage</h3>
                <p className="text-gray-600 text-sm">Invitez vos amis et proposez vos idées de destinations</p>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-xl -z-10" />
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto -mt-10 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">2</div>
                <Image src="/api/placeholder/200/120" width={200} height={120} alt="Votez ensemble" className="rounded-lg mb-4 mx-auto transform transition-all duration-500 group-hover:shadow-xl" />
                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">Votez ensemble</h3>
                <p className="text-gray-600 text-sm">Dates, destination, activités... Chaque voix compte !</p>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-xl -z-10" />
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto -mt-10 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">3</div>
                <Image src="/api/placeholder/200/120" width={200} height={120} alt="Réservez facilement" className="rounded-lg mb-4 mx-auto transform transition-all duration-500 group-hover:shadow-xl" />
                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">Réservez facilement</h3>
                <p className="text-gray-600 text-sm">Bénéficiez de nos bons plans exclusifs étudiants</p>
              </div>

              {/* Step 4 */}
              <div className="group relative bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-xl -z-10" />
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto -mt-10 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">4</div>
                <Image src="/api/placeholder/200/120" width={200} height={120} alt="Profitez" className="rounded-lg mb-4 mx-auto transform transition-all duration-500 group-hover:shadow-xl" />
                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">Profitez</h3>
                <p className="text-gray-600 text-sm">Créez des souvenirs inoubliables avec vos amis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA with gradient background and animations */}
      <section className="relative overflow-hidden">
        {/* Background with softer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-orange-500 to-orange-600/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full filter blur-[100px] mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/30 rounded-full filter blur-[100px] mix-blend-soft-light" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl"></div>
              
              <div className="relative text-center space-y-8">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  Prêt à révolutionner vos voyages entre amis ?
                </h2>
                
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02]
                           flex items-center space-x-3 mx-auto shadow-xl hover:shadow-2xl">
                  <span>Rejoindre la liste d'attente</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="pt-4 flex flex-col items-center space-y-3">
                  <div className="flex items-center space-x-6 text-white/80 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>2000+ en attente</span>
                    </div>
                    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Lancement prochain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}