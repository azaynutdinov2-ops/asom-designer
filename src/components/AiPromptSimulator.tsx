import React, { useState } from 'react';
import { Sparkles, Wand2, Copy, Check, RefreshCw, Layers } from 'lucide-react';

export const AiPromptSimulator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'logo' | 'packaging' | 'character' | '3d'>('logo');
  const [customStyle, setCustomStyle] = useState('Minimalist Cyberpunk');
  const [customSubject, setCustomSubject] = useState('Falcon Coffee Shop');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const presets = {
    logo: {
      name: "Logotip va Mascot",
      samplePrompt: "Minimalist vector logo forFalcon Coffee Shop, geometric falcon icon fused with coffee bean, Cyberpunk neon color palette, flat 2d design, white background --v 6.0",
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop"
    },
    packaging: {
      name: "Qadoqlash (Packaging)",
      samplePrompt: "Luxury organic tea packaging box, embossed gold foil Falcon Coffee Shop logo, botanical Cyberpunk aesthetic, soft caustic studio lighting, photorealistic --ar 4:5",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
    },
    character: {
      name: "3D Xarakter / Mascot",
      samplePrompt: "3D mascot character for Falcon Coffee Shop, cute stylized falcon barista wearing neon apron, octane render 8k, soft shadow, Pixar style --v 6.0",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    '3d': {
      name: "3D Poster & Visual",
      samplePrompt: "Surreal 3D floating coffee cup with liquid splash, isometric view, Cyberpunk neon gradient, volumetric lighting, high fashion commercial --ar 16:9",
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop"
    }
  };

  const currentPreset = presets[selectedCategory];

  const handleSimulate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Interactive AI Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            AI Prompt Generatsiyasini O'zingiz Sinab Ko'ring!
          </h2>
          <p className="text-sm text-slate-600">
            Dizayn yo'nalishini tanlang va neyrotarmoq uchun mukammal prompt kodi qanday shakllanishini ko'ring:
          </p>
        </div>

        {/* Sandbox Glass Card */}
        <div className="mt-10 max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-slate-200">
            {(Object.keys(presets) as Array<keyof typeof presets>).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  handleSimulate();
                }}
                className={`text-xs px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {presets[cat].name}
              </button>
            ))}
          </div>

          {/* Sandbox controls & Output */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Prompt Controls */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Loyiha Mavzusi:</label>
                <input
                  type="text"
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Masalan: Falcon Coffee Shop"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Uslub (Style):</label>
                <div className="flex flex-wrap gap-2">
                  {['Minimalist Cyberpunk', '3D Photorealism', 'Vintage Luxury', 'Swiss Vector'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setCustomStyle(st)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-medium border cursor-pointer ${
                        customStyle === st
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generated Prompt Code Block */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 space-y-2 relative shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Generatsiya Prompti:</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Nusxalandi!' : 'Nusxalash'}</span>
                  </button>
                </div>
                <p className="text-xs font-mono text-emerald-300 italic leading-relaxed">
                  "{currentPreset.samplePrompt.replace('Falcon Coffee Shop', customSubject).replace('Cyberpunk', customStyle)}"
                </p>
              </div>

              <button
                onClick={handleSimulate}
                disabled={isGenerating}
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
              >
                {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{isGenerating ? 'AI Generatsiya Qilmoqda...' : 'Promptni Qayta Generatsiya Qilish'}</span>
              </button>
            </div>

            {/* Right Preview Artwork */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl aspect-square flex items-center justify-center">
              {isGenerating ? (
                <div className="text-center space-y-2 p-4">
                  <Wand2 className="w-8 h-8 text-indigo-400 animate-bounce mx-auto" />
                  <p className="text-xs font-mono text-indigo-300 animate-pulse">Midjourney V6 renderilmoqda...</p>
                </div>
              ) : (
                <img
                  src={currentPreset.img}
                  alt={currentPreset.name}
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                />
              )}
              
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white border border-slate-700">
                AI Render Result (4K)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
