import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Wand2, Palette, Calendar, Share2 } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdCopyAll, MdMusicNote } from "react-icons/md";
import featureImage from "../public/feature.png";

const featureCards = [
  {
    icon: <MdCopyAll className="text-primary text-xl" />,
    title: "Гибкая система шаблонов",
    description:
      "Выбирайте из готовых шаблонов монтажа для TikTok, Instagram Reels* и YouTube Shorts или создавайте свои собственные — настраивайте переходы, тексты и эффекты под уникальный стиль вашего бренда. Сохраняйте любимые пресеты и мгновенно применяйте их к любому видео, экономя время на рутинных правках и фокусируясь на креативе.",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Calendar className="text-[#32D4A4] text-xl" />,
    title: "Интеллектуальный планировщик публикаций",
    description:
      "Планируйте выход ваших видео на неделю вперёд: назначайте даты и время для каждого ролика, выбирайте целевые соцсети и оставляйте всё на автопилоте. Наш планировщик сам опубликует готовые вертикальные клипы в заданный момент, гарантируя регулярность и максимальный охват без лишних усилий.",
    bgColor: "bg-[#32D4A4]/10",
  },
  {
    icon: <Share2 className="text-[#FFA41B] text-xl" />,
    title: "Публикация в один клик",
    description:
      "Благодаря прямой интеграции с TikTok, Instagram*, YouTube и другими платформами вы сможете выгрузить готовый вертикальный ролик в нужные соцсети одним нажатием. Забудьте про копирование файлов и вход в несколько аккаунтов — всё происходит прямо в приложении, быстро и без лишних действий.",
    bgColor: "bg-[#FFA41B]/10",
  },
  {
    icon: <MdMusicNote className="text-[#FF6B6B] text-xl" />,
    title: "Автоматический подбор фоновой музыки",
    description:
      "Наш алгоритм подберёт трек без авторских прав, идеально соответствующий настроению вашего клипа — от динамичных битов до спокойных мелодий. Экономьте время на поиске и лицензировании музыки: просто включите функцию, и ваше видео сразу получит звук, подчёркивающий атмосферу.",
    bgColor: "bg-[#FF6B6B]/10",
  },
];

const platforms = [
  {
    icon: <FaTiktok className="text-primary" />,
    name: "TikTok",
    details: "Соотношение 9:16, до 60 с для оптимального вовлечения",
  },
  {
    icon: <FaInstagram className="text-primary" />,
    name: "Instagram Reels*",
    details: "Соотношение сторон 9:16, оптимальный формат 15-30 сек.",
  },
  {
    icon: <FaYoutube className="text-primary" />,
    name: "YouTube Shorts",
    details: "Соотношение сторон 9:16, до 60 с, используя кастомные превью",
  },
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-light"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Налаженное «пассивное» ведение соцсетей
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Запускайте публикации на автопилоте — даже пока вы спите. Наша
            система готовых шаблонов и интеллектуальный планировщик превращают
            создание вертикальных роликов в несколько кликов, освобождая часы
            монтажа для новых идей и проектов.
          </p>
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
              whileHover={{ y: -20 }}
            >
              <div
                className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Легкий мультиплатформенный рост
              </h3>
              <p className="text-muted-foreground mb-6">
                Без каких-либо ручных настроек Video Cliper автоматически
                оптимизирует каждый клип для уникальных требований каждой
                платформы. Получайте подписчиков на всех основных платформах
                одновременно без дополнительной работы.
              </p>

              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {platform.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="md:h-full"
              whileInView={{
                scale: [0.9, 1],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={featureImage}
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
