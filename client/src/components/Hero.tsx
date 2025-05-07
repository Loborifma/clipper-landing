import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import EmailCaptureForm from './EmailCaptureForm';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              variants={itemVariants}
            >
              <Clock className="w-4 h-4 mr-2" />
              <span>Coming Soon</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={itemVariants}
            >
              Turn Long Videos Into <span className="text-primary">Vertical Gold</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl"
              variants={itemVariants}
            >
              Our AI-powered editor will help you create perfectly-sized vertical videos for TikTok, Instagram and YouTube Shorts. Join the waitlist to get early access!
            </motion.p>
            
            <motion.div 
              className="p-3 md:p-4 bg-gray-100 rounded-lg inline-block mb-6 md:mb-8"
              variants={itemVariants}
            >
              <p className="text-sm md:text-base text-muted-foreground">
                <span className="font-medium text-foreground">For:</span> Social media managers, content creators, and small business owners who need eye-catching vertical videos in seconds.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mb-10"
            >
              <EmailCaptureForm 
                buttonText="Join Waitlist"
                buttonClassName="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-semibold px-6 py-3 rounded-lg"
              />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <Check className="text-[#32D4A4] mr-2 h-5 w-5" />
                <span>Be first to know when we launch</span>
              </div>
              <div className="flex items-center">
                <Check className="text-[#32D4A4] mr-2 h-5 w-5" />
                <span>Early access to the platform</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Video Cliper interface showing video transformation" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-2 rounded-xl shadow-lg">
                <div className="bg-[#32D4A4] text-white p-2 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="font-medium">AI-Powered</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
