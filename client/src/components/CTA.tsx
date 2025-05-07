import { motion } from 'framer-motion';
import { Clock, Bell } from 'lucide-react';
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
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            <span>Coming Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Excited About Video Cliper?</h2>
          <p className="text-white/80 text-lg mb-8">
            We're working hard to bring you the best tool for creating vertical videos. 
            Join our waitlist to be notified when we launch!
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <EmailCaptureForm 
              buttonText="Notify Me"
              buttonClassName="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              inputClassName="w-full px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              <span className="text-sm">Get early access</span>
            </div>
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              <span className="text-sm">No spam, only launch updates</span>
            </div>
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              <span className="text-sm">Be the first to try it</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#pricing" className="text-sm text-white/70 hover:text-white underline">
              See planned pricing
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
