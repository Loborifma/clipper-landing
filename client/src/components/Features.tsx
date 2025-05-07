import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Wand2, Palette, Download, Twitch, Instagram, Youtube } from 'lucide-react';

const featureCards = [
  {
    icon: <Wand2 className="text-primary text-xl" />,
    title: "AI-Powered Auto-Clipping",
    description: "Our AI identifies the most engaging moments from your long videos and automatically reformats them for vertical viewing.",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Palette className="text-[#FF6B6B] text-xl" />,
    title: "Customizable Style Presets",
    description: "Apply beautiful filters, text overlays, and branded intros/outros that match your style and increase engagement.",
    bgColor: "bg-[#FF6B6B]/10"
  },
  {
    icon: <Download className="text-[#32D4A4] text-xl" />,
    title: "One-Click Export",
    description: "Export your finished vertical videos with a single click. Optimized formats for TikTok, Instagram Reels, and YouTube Shorts.",
    bgColor: "bg-[#32D4A4]/10"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Video Cliper Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transform your long-form videos into engaging social content with just a few clicks.</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {featureCards.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg className="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Perfect for Every Platform</h3>
              <p className="text-muted-foreground mb-6">Video Cliper automatically optimizes your content for each platform's specific requirements, ensuring maximum engagement and reach.</p>
              
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
