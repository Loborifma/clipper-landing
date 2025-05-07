import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const videoExamples = [
  {
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=889",
    title: "Travel Vlog to TikTok",
    description: "Long travel footage transformed into engaging 30-second vertical stories",
    category: "Travel Highlights"
  },
  {
    thumb: "https://pixabay.com/get/gb9fd63a02c5744dbd3c97d6037603f34f2063a723af2c2a6db521a7c81b42bb6f0d3f6b2491f709ede14fdbd14d00f283f2a4ed1a9f04415353b73a9bf0b3c81_1280.jpg",
    title: "Cooking Video for Reels",
    description: "Full recipe tutorial clipped into 15-second highlight for Instagram",
    category: "Cooking Recipes"
  },
  {
    thumb: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=889",
    title: "Product Demo for Shorts",
    description: "Product showcase with key features highlighted for YouTube Shorts",
    category: "Product Demo"
  }
];

export default function Examples() {
  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Video Cliper in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Check out these examples of videos transformed with our platform</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {videoExamples.map((example, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[9/16] mb-4 group cursor-pointer">
                <img 
                  src={example.thumb} 
                  alt={`${example.title} example`} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Play className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-2 px-4 text-white">
                  <div className="text-sm font-medium">{example.category}</div>
                </div>
              </div>
              <h3 className="font-bold mb-1">{example.title}</h3>
              <p className="text-sm text-muted-foreground">{example.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Browse more examples
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
