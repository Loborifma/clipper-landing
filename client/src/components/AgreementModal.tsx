import { ReactNode } from "react";
import { Modal } from "./ui/Modal";
import { ACTIVATE_DATE, COMPANY, EMAIL } from "@/lib/consts";
import { PrivacyModal } from "./PrivacyModal";

type Props = {
  slotTrigerButton: ReactNode;
};

export const AgreementModal = ({ slotTrigerButton }: Props) => {
  return (
    <Modal
      slotTrigerButton={slotTrigerButton}
      title={"ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ Video Clipper"}
      description={`Дата вступления в силу: ${ACTIVATE_DATE}`}
      content={
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg h-[600px] overflow-auto">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">
            1. Общие положения
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">1.1</strong> Настоящее
              Пользовательское соглашение регулирует отношения между:
              <div className="mt-2 pl-4 space-y-1">
                <div>
                  • <strong className="text-blue-600">{COMPANY}</strong> (далее
                  — «Мы», «Администрация»)
                </div>
                <div>
                  • <strong className="text-green-600">Пользователем</strong> —
                  любым лицом, использующим наш сайт
                  clipper-landing.onrender.com
                </div>
              </div>
            </div>

            <div>
              <strong className="text-gray-800">1.2</strong> Используя наш сайт,
              вы автоматически соглашаетесь с условиями данного соглашения.
            </div>

            <div>
              <strong className="text-gray-800">1.3</strong> Если вы не согласны
              с какими-либо условиями — пожалуйста, покиньте сайт.
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            2. Что мы предлагаем
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">2.1</strong> На нашем лендинге
              мы предлагаем:
              <div className="bg-blue-50 p-4 rounded-lg mt-2 space-y-1">
                <div>• Подписаться на список ожидания Video Clipper</div>
                <div>• Получить уведомление о запуске приложения</div>
                <div>
                  • Получить ранний доступ к Video Clipper после запуска
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <strong className="text-gray-800">2.2</strong> Все услуги
              предоставляются{" "}
              <strong className="text-green-700">бесплатно</strong>.
            </div>

            <div>
              <strong className="text-gray-800">2.3</strong> Video Clipper — это
              будущее приложение для автоматизации монтажа вертикальных видео.
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            3. Ваши права и обязанности
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Ваши права:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • Получить уведомление о запуске Video Clipper на указанный
                  email
                </li>
                <li>• Отписаться от списка ожидания в любой момент</li>
                <li>• Получить ранний доступ к приложению</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Ваши обязанности:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Указывать корректный email-адрес</li>
                <li>• Не использовать сайт в противозаконных целях</li>
                <li>• Соблюдать настоящее соглашение</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            4. Наши права и обязанности
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                Наши права:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Изменять условия соглашения (с уведомлением)</li>
                <li>• Удалять пользователей из списка при нарушении правил</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">
                Наши обязанности:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Уведомить вас о запуске Video Clipper</li>
                <li>• Защищать ваши персональные данные</li>
                <li>• Предоставить ранний доступ к приложению</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            5. Ограничение ответственности
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <strong className="text-gray-800">5.1</strong> Мы{" "}
              <strong className="text-red-600">не несем ответственность</strong>{" "}
              за:
              <ul className="mt-2 space-y-1 pl-4 list-disc text-sm">
                <li>Временную недоступность сайта</li>
                <li>Технические сбои при подписке</li>
                <li>Задержки в разработке Video Clipper</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <strong className="text-gray-800">5.2</strong> Вы{" "}
              <strong className="text-yellow-700">
                несете ответственность
              </strong>{" "}
              за:
              <ul className="mt-2 space-y-1 pl-4 list-disc text-sm">
                <li>Корректность указанного email-адреса</li>
                <li>Соблюдение условий соглашения</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            6. Персональные данные
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">6.1</strong> Мы собираем только
              ваш email-адрес для уведомлений о запуске.
            </div>

            <div>
              <strong className="text-gray-800">6.2</strong> Подробности
              обработки данных описаны в нашей{" "}
              <PrivacyModal
                slotTrigerButton={
                  <span className="text-blue-600 hover:text-blue-800 underline">
                    Политике конфиденциальности
                  </span>
                }
              />
              .
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <strong className="text-gray-800">6.3</strong> Подписываясь на
              список ожидания, вы даете согласие на обработку email-адреса.
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            7. Изменения в соглашении
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">7.1</strong> Мы можем изменить
              это соглашение в любое время.
            </div>

            <div>
              <strong className="text-gray-800">7.2</strong> О всех изменениях
              мы уведомим по email.
            </div>

            <div>
              <strong className="text-gray-800">7.3</strong> Продолжение
              использования сайта означает согласие с новыми условиями.
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            8. Разрешение споров
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">8.1</strong> Все споры решаются
              путем переговоров.
            </div>

            <div>
              <strong className="text-gray-800">8.2</strong> При невозможности
              договориться — споры решаются в суде по месту нахождения ИП.
            </div>

            <div>
              <strong className="text-gray-800">8.3</strong> К отношениям сторон
              применяется законодательство Российской Федерации.
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            9. Контактная информация
          </h2>

          <div className="bg-gray-100 p-5 rounded-lg">
            <p className="mb-3">По всем вопросам обращайтесь:</p>
            <div className="space-y-2">
              <div>
                <strong className="text-gray-800">Email:</strong> {EMAIL}
              </div>
              <div>
                <strong className="text-gray-800">Сайт:</strong>{" "}
                clipper-landing.onrender.com
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              Согласие с условиями
            </h3>
            <p>
              Нажимая кнопку "Присоединиться" и указывая свой email, вы
              подтверждаете, что прочитали, поняли и соглашаетесь с условиями
              настоящего Пользовательского соглашения.
            </p>
          </div>
        </div>
      }
    />
  );
};
