import { useState } from 'react';
import {
  Search,
  TrafficCone,
  Gavel,
  PlusSquare,
  Wrench,
  Brain,
  Home,
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Flag,
  Timer,
  CheckCircle2,
  Menu,
  Landmark,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'home' | 'study' | 'exam';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {currentScreen === 'home' ? (
          <HomePage
            key="home"
            onGoStudy={() => setCurrentScreen('study')}
            onGoExam={() => setCurrentScreen('exam')}
          />
        ) : currentScreen === 'study' ? (
          <StudyModules
            key="study"
            onStartExam={() => setCurrentScreen('exam')}
            onGoHome={() => setCurrentScreen('home')}
          />
        ) : (
          <ExamMode key="exam" onExit={() => setCurrentScreen('study')} />
        )}
      </AnimatePresence>
    </div>
  );
}

function HomePage({
  onGoStudy,
  onGoExam,
}: {
  onGoStudy: () => void;
  onGoExam: () => void;
  key?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col pb-24 md:pb-0"
    >
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Landmark className="w-6 h-6" />
            <h1 className="font-bold tracking-tighter uppercase text-lg">КЫРГЫЗ РЕСПУБЛИКАСЫ</h1>
          </div>
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="text-white border-b-2 border-white pb-1">Home</a>
            <button onClick={onGoStudy} className="text-white/60 hover:text-white transition-colors">Study</button>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Bookings</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Profile</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 pt-8 pb-12 space-y-10">
        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden bg-primary text-white p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 z-10">
            <p className="text-sm font-label uppercase tracking-widest text-white/60">Добро пожаловать / Welcome back</p>
            <h2 className="text-4xl font-extrabold tracking-tight">Ready to study<br />for your exam?</h2>
            <p className="text-white/70 font-label max-w-sm">
              Continue where you left off or start a new topic. Your exam is closer than you think.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onGoStudy}
                className="flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl shadow active:scale-95 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Continue Studying
              </button>
              <button
                onClick={onGoExam}
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl active:scale-95 transition-all"
              >
                <ShieldCheck className="w-5 h-5" />
                Mock Exam
              </button>
            </div>
          </div>
          <div className="hidden md:block z-10">
            <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
              <Landmark className="w-20 h-20 text-white/40" />
            </div>
          </div>
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <TrendingUp className="w-5 h-5 text-primary" />, label: 'Overall Progress', value: '61%' },
            { icon: <CheckCircle2 className="w-5 h-5 text-tertiary" />, label: 'Topics Completed', value: '1 / 5' },
            { icon: <Award className="w-5 h-5 text-secondary" />, label: 'Best Mock Score', value: '17 / 20' },
            { icon: <Timer className="w-5 h-5 text-primary" />, label: 'Study Streak', value: '4 days' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div className="p-2 bg-surface-container-low rounded-lg w-fit">{stat.icon}</div>
              <div>
                <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-xs font-label text-outline mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-4">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <TrafficCone className="w-6 h-6 text-primary" />, title: 'Road Signs & Markings', sub: '150 questions · 75% done', progress: 75 },
              { icon: <Gavel className="w-6 h-6 text-secondary" />, title: 'Rules of the Road', sub: '120 questions · 42% done', progress: 42 },
              { icon: <PlusSquare className="w-6 h-6 text-secondary" />, title: 'First Aid', sub: '40 questions · 20% done', progress: 20 },
              { icon: <Wrench className="w-6 h-6 text-primary" />, title: 'Vehicle Mechanics', sub: '12 topics · 90% done', progress: 90 },
            ].map((item) => (
              <button
                key={item.title}
                onClick={onGoStudy}
                className="flex items-center gap-4 bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-left group"
              >
                <div className="p-3 bg-surface-container-low rounded-xl shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-primary truncate">{item.title}</p>
                  <p className="text-xs font-label text-outline mt-0.5">{item.sub}</p>
                  <div className="mt-2 w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass-effect border-t border-outline-variant/20 px-4 pt-2 pb-6 flex justify-around items-center z-50">
        <button className="flex flex-col items-center gap-1 p-2 text-primary">
          <div className="bg-primary/10 p-2 rounded-xl">
            <Home className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold font-label">Home</span>
        </button>
        <button onClick={onGoStudy} className="flex flex-col items-center gap-1 p-2 text-outline">
          <BookOpen className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Study</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-outline">
          <Calendar className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Bookings</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-outline">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Profile</span>
        </button>
      </nav>
    </motion.div>
  );
}

function StudyModules({ onStartExam, onGoHome }: { onStartExam: () => void; onGoHome: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col pb-24 md:pb-0"
    >
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Landmark className="w-6 h-6" />
            <h1 className="font-bold tracking-tighter uppercase text-lg">КЫРГЫЗ РЕСПУБЛИКАСЫ</h1>
          </div>
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={onGoHome} className="text-white/60 hover:text-white transition-colors">Home</button>
            <a href="#" className="text-white border-b-2 border-white pb-1">Study</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Bookings</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Profile</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 pt-8 pb-12">
        {/* Search & Title */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="font-label text-sm uppercase tracking-widest text-outline">Digital Learning</p>
              <h2 className="text-4xl font-extrabold text-primary tracking-tight">Study Modules</h2>
            </div>
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Find a specific topic..." 
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 font-label focus:ring-2 focus:ring-primary-fixed transition-all placeholder:text-outline"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Road Signs - Large Card */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="tunduk-banner" />
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-low rounded-xl">
                  <TrafficCone className="w-8 h-8 text-primary" />
                </div>
                <span className="font-label font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full text-xs">75% Complete</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Road Signs & Markings</h3>
              <p className="text-on-surface-variant mb-8 max-w-md">Comprehensive guide to regulatory, warning, and information signs used across the Kyrgyz Republic territory.</p>
              <div className="mt-auto space-y-4">
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="bg-primary h-full rounded-full" 
                  />
                </div>
                <div className="flex justify-between text-sm font-label text-outline">
                  <span>150 Questions</span>
                  <span>112 Answered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rules of the Road */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="h-48 w-full bg-surface-container-low overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1545147986-a9d6f210df77?q=80&w=800&auto=format&fit=crop" 
                alt="Intersection" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <Gavel className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Rules of the Road</h3>
              <p className="text-sm text-on-surface-variant flex-grow">Legal frameworks, intersection priorities, and traffic light protocols.</p>
              <div className="pt-6">
                <div className="flex items-center justify-between font-label text-sm font-semibold text-primary">
                  <span>Progress</span>
                  <span>42%</span>
                </div>
              </div>
            </div>
          </div>

          {/* First Aid */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-error-container rounded-lg">
                <PlusSquare className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-primary">First Aid</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-label text-outline">32 Questions remaining</span>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Urgent</span>
            </div>
            <div className="w-full bg-surface-container-low h-1.5 rounded-full">
              <div className="bg-secondary h-full w-1/5 rounded-full" />
            </div>
          </div>

          {/* Vehicle Mechanics */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-surface-container-low rounded-lg">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary">Vehicle Mechanics</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-label text-outline">12 Topics</span>
              <span className="text-xs font-bold text-primary">90%</span>
            </div>
            <div className="w-full bg-surface-container-low h-1.5 rounded-full">
              <div className="bg-primary h-full w-[90%] rounded-full" />
            </div>
          </div>

          {/* Driving Psychology */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-tertiary-fixed rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary">Driving Psychology</h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-label text-outline">Completed</span>
              <CheckCircle2 className="w-5 h-5 text-tertiary" />
            </div>
            <div className="w-full bg-tertiary-fixed-dim h-1.5 rounded-full" />
          </div>
        </div>

        {/* Mock Exam Banner */}
        <div className="mt-12 p-8 bg-surface-container-high rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-primary">Ready for the real thing?</h3>
              <p className="text-on-surface-variant font-label">Simulate the official state driving exam. 20 minutes, 20 random questions.</p>
            </div>
            <button 
              onClick={() => onStartExam()}
              className="premium-gradient text-white px-10 py-5 rounded-xl font-bold tracking-tight shadow-lg active:scale-95 transition-all flex items-center gap-3 w-full md:w-auto justify-center group"
            >
              <ShieldCheck className="w-6 h-6" />
              START MOCK EXAM
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass-effect border-t border-outline-variant/20 px-4 pt-2 pb-6 flex justify-around items-center z-50">
        <button onClick={onGoHome} className="flex flex-col items-center gap-1 p-2 text-outline">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-primary">
          <div className="bg-primary/10 p-2 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold font-label">Study</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-outline">
          <Calendar className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Bookings</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-outline">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium font-label">Profile</span>
        </button>
      </nav>
    </motion.div>
  );
}

function ExamMode({ onExit }: { onExit: () => void; key?: string }) {
  const [selectedOption, setSelectedOption] = useState<string | null>('B');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 flex flex-col bg-surface"
    >
      {/* Exam Header */}
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
        <div className="flex items-center gap-3">
          <Landmark className="w-6 h-6" />
          <span className="font-bold tracking-widest uppercase text-sm md:text-base">КЫРГЫЗ РЕСПУБЛИКАСЫ</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] md:text-xs font-label font-medium">EXAM MODE ACTIVE</span>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-surface-container-low px-6 py-3 flex justify-between items-center border-b border-outline-variant/20">
        <div className="flex flex-col">
          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">Убакыт / Time Remaining</span>
          <div className="flex items-center gap-2 text-primary">
            <Timer className="w-5 h-5" />
            <span className="text-2xl font-bold tracking-tight">18:45</span>
          </div>
        </div>
        <div className="hidden md:flex flex-1 mx-12 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="w-1/4 bg-primary transition-all duration-500" />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">Суроо / Question</span>
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl font-bold tracking-tight">5 <span className="text-on-surface-variant/40 font-normal">/ 20</span></span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Question Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
              <div className="tunduk-banner" />
              <img 
                src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop" 
                alt="Traffic Scenario" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-3 py-1 rounded text-[10px] font-label">
                FIG 12.4: Intersection Priority
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-primary leading-snug">
                Сүрөттө көрсөтүлгөн кырдаалда кайсы транспорт каражаты биринчи өтүүгө укуктуу?
              </h2>
              <p className="mt-2 text-on-surface-variant font-medium">
                In the situation shown in the image, which vehicle has the priority to pass first?
              </p>
            </div>
          </div>

          {/* Options Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-[11px] font-label font-bold uppercase text-on-surface-variant/70 tracking-widest px-2">Варианттар / Select One Answer</span>
            
            {[
              { id: 'A', ky: 'Көк түстөгү жеңил унаа', en: 'The blue passenger car' },
              { id: 'B', ky: 'Кызыл түстөгү автобус', en: 'The red bus' },
              { id: 'C', ky: 'Атайын кызматтын унаасы (сиренасыз)', en: 'Emergency vehicle (without siren)' },
              { id: 'D', ky: 'Бардык унаалар бир убакта', en: 'All vehicles simultaneously' },
            ].map((option) => (
              <button 
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 active:scale-[0.98] shadow-sm ${
                  selectedOption === option.id 
                    ? 'bg-primary-fixed/30 border-primary ring-2 ring-primary/10' 
                    : 'bg-white border-transparent hover:border-primary-fixed-dim'
                }`}
              >
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold transition-colors ${
                  selectedOption === option.id ? 'bg-primary text-white' : 'bg-surface-container-high text-primary'
                }`}>
                  {option.id}
                </div>
                <div className="flex flex-col flex-1">
                  <span className={`font-semibold ${selectedOption === option.id ? 'text-primary font-bold' : 'text-on-surface'}`}>
                    {option.ky}
                  </span>
                  <span className="text-sm text-on-surface-variant">{option.en}</span>
                </div>
                {selectedOption === option.id && (
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                )}
              </button>
            ))}

            <div className="pt-8 mt-auto grid grid-cols-2 gap-4">
              <button 
                onClick={onExit}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-primary bg-surface-container-high hover:bg-surface-container-highest transition-colors active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
                Артка / Back
              </button>
              <button className="premium-gradient flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white shadow-lg active:scale-95">
                Кийинки / Next
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Exam Footer */}
      <footer className="bg-surface-container-low py-4 px-6 border-t border-outline-variant/20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-outline-variant flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary">ИМАНКУЛОВ АЗАМАТ</span>
            <span className="text-[10px] font-label text-on-surface-variant">ID: 4022934812</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-secondary font-bold text-sm bg-secondary/10 px-4 py-2 rounded-lg hover:bg-secondary/20 transition-colors">
          <Flag className="w-4 h-4" />
          СУРООГО ШЕКТЕНҮҮ / FLAG QUESTION
        </button>
      </footer>
    </motion.div>
  );
}
