// components/ExitIntentPopup.tsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { useSaveEmail } from "@/hooks/useSaveEmail";
import { useToast } from "@/hooks/use-toast";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const subscription = useSaveEmail({
    onSuccess: () => {
      toast({
        title: "Отлично!",
        description: "Спасибо за ваш интерес! Мы будем держать вас в курсе.",
        duration: 5000,
      });
    },
    onError: (error) => {
      toast({
        title: "Что-то пошло не так",
        description: error.message || "Пожалуйста попробуйте позже",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  useEffect(() => {
    // Проверяем, показывали ли уже popup в этой сессии
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
    const startTime = Date.now();

    const handleMouseLeave = (e: MouseEvent) => {
      // Проверяем, что курсор покидает окно сверху
      if (e.clientY <= 0 && !hasSeenPopup) {
        const timeOnSite = Date.now() - startTime;

        // Проверяем условия: 30 секунд на сайте и не мобильное устройство
        if (timeOnSite >= 5000 && !isMobileDevice()) {
          setIsOpen(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    // Добавляем слушатель только через 30 секунд
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      subscription.mutate(email);
      setIsOpen(false);
      // Сохраняем в localStorage для долгосрочного хранения
      localStorage.setItem("hasSubscribedViaExitIntent", "true");
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-xl animate-in fade-in zoom-in-95">
        <DialogTitle>{null}</DialogTitle>
        <DialogDescription>{null}</DialogDescription>
        <div className="relative">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              🛑 Подождите! Уходите с пустыми руками?
            </h2>

            <p className="text-gray-600">
              Пока Video Clipper в разработке, получите практическую пользу уже
              сейчас
            </p>

            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-lg text-blue-900">
                📋 "Чек-лист: Как сократить время на видео-монтаж в 3 раза"
              </h3>
              <ul className="text-left space-y-1 text-sm text-blue-800">
                <li>✅ 12 работающих способов оптимизации процесса</li>
                <li>✅ Основано на реальном опыте SMM-щиков</li>
                <li>✅ Применимо к CapCut, InShot и другим редакторам</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Отправка..." : "Получить бесплатно"}
              </button>
            </form>

            <button
              onClick={() => {
                localStorage.setItem("hasSubscribedViaExitIntent", "true");
                setIsOpen(false);
              }}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              ❌ Нет, спасибо
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
