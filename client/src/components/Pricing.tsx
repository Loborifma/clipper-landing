import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "per month",
    description: "Perfect for casual creators and beginners",
    features: [
      "Up to 60 minutes of processed video per month",
      "720p vertical video export",
      "Basic filters and text overlays",
      "Standard support",
      "Single platform export format"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "Pro",
    price: "$20",
    period: "per month",
    description: "For serious creators and businesses",
    features: [
      "Unlimited video processing",
      "1080p vertical video export",
      "Advanced filters and text overlays",
      "Priority support",
      "Multi-platform optimized exports",
      "Custom branded intros/outros",
      "Team collaboration features"
    ],
    buttonText: "Go Pro",
    buttonVariant: "default",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-2xl border ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-gray-200'} overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800'}`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-10 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            Need a custom plan for your team?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}