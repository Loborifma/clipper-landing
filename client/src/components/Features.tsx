import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Wand2, Palette, Download, Twitch, Instagram, Youtube, Calendar, Share2 } from 'lucide-react';

const featureCards = [
  {
    icon: <Wand2 className="text-primary text-xl" />,
    title: "Set-and-Forget AI Clipping",
    description: "Upload once and walk away. Our AI automatically identifies the most engaging moments from your videos and transforms them into attention-grabbing vertical content.",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Palette className="text-[#FF6B6B] text-xl" />,
    title: "Automatic Style Enhancement",
    description: "Your personal AI editor applies your chosen style presets, captions, and branding to every clip - zero effort required for a consistent, professional look.",
    bgColor: "bg-[#FF6B6B]/10"
  },
  {
    icon: <Calendar className="text-[#32D4A4] text-xl" />,
    title: "Smart Content Scheduling",
    description: "Plan your video releases in advance. Schedule daily, weekly, or monthly posts automatically to maintain a consistent presence while you focus on other things.",
    bgColor: "bg-[#32D4A4]/10"
  },
  {
    icon: <Share2 className="text-[#FFA41B] text-xl" />,
    title: "Hands-free Publishing",
    description: "Publish directly to your favorite platforms - YouTube, TikTok, Instagram Reels - without lifting a finger. Build your audience while you sleep.",
    bgColor: "bg-[#FFA41B]/10"
  }
];

const platforms = [
  {
    icon: <Twitch className="text-primary" />,
    name: "TikTok",
    details: "9:16 ratio, up to 60s for optimal engagement"
  },
  {
    icon: <Instagram className="text-primary" />,
    name: "Instagram Reels",
    details: "9:16 ratio, optimal 15-30s format"
  },
  {
    icon: <Youtube className="text-primary" />,
    name: "YouTube Shorts",
    details: "9:16 ratio, up to 60s with custom thumbnails"
  }
];

export default function Features() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ultimate Passive Video System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Build a consistent social media presence while you sleep. Video Cliper's automation turns your long-form content into a steady stream of engaging shorts - no daily work required.</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8 md:gap-10"
        >
          {featureCards.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all"
              whileHover={{ y: -10 }}
            >
              <div className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Effortless Multi-Platform Growth</h3>
              <p className="text-muted-foreground mb-6">Without any manual adjustments, Video Cliper automatically optimizes each clip for every platform's unique requirements. Gain followers on all major platforms simultaneously with zero extra work.</p>
              
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="md:h-full"
              whileInView={{ 
                scale: [0.9, 1],
                opacity: [0, 1] 
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Smartphone displaying social media apps with vertical videos" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
