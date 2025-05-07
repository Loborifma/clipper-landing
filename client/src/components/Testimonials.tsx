import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Video Cliper saved me hours of editing time. I now create a week's worth of content in under an hour. The AI is incredibly accurate at finding the best moments.",
    name: "Alex J.",
    position: "Social Media Manager",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "As a small business owner, I never had time to create vertical videos for all platforms. Video Cliper makes it simple and my engagement has doubled since I started using it.",
    name: "Sarah M.",
    position: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "The customizable presets are amazing. I can keep my brand consistent across all platforms and the one-click export feature is a game changer for my workflow.",
    name: "Marcus T.",
    position: "Travel Influencer",
    avatar: "https://pixabay.com/get/gcddf26d96b0d42090620d339df6a38c55b73e4dd9ac5891411e354f9ef0af0ecb4bd27f6db9e669cc98bd09fe19a8fcbca38c3259a9207cf0191c9e710a601fc_1280.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Video Cliper?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands of content creators who are saving time and boosting engagement</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-1 text-[#FFD166] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={`Profile of ${testimonial.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
