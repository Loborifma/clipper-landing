import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import EmailCaptureForm from './EmailCaptureForm';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Content?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of creators who are saving time and increasing engagement with Video Cliper.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <EmailCaptureForm 
              buttonText="I Like It"
              buttonClassName="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              inputClassName="w-full px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5" />
              <span className="text-sm">Free 7-day trial</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#" className="text-sm text-white/70 hover:text-white underline">
              See pricing plans
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
