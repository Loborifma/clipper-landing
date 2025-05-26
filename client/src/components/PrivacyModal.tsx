import { ReactNode } from "react";
import { Modal } from "./ui/Modal";
import { ACTIVATE_DATE, COMPANY, EMAIL } from "@/lib/consts";

type Props = {
  slotTrigerButton: ReactNode;
};

export const PrivacyModal = ({ slotTrigerButton }: Props) => {
  return (
    <Modal
      slotTrigerButton={slotTrigerButton}
      title={"ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ Video Clipper"}
      description={`Дата вступления в силу: ${ACTIVATE_DATE}`}
      content={
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg h-[600px] overflow-auto">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">
            1. Кто мы
          </h2>
          <p className="mb-4">
            Мы — команда Video Clipper. Наш сервис поможет автоматизировать
            монтаж вертикальных видео для социальных сетей.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <strong className="text-gray-800">Контактная информация:</strong>
            <br />
            <div className="mt-2 space-y-1">
              <div>• {COMPANY}</div>
              <div>• Email: {EMAIL}</div>
              <div>• Сайт: clipper-landing.onrender.com</div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            2. Какие данные мы собираем
          </h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p>
              На нашем сайте мы собираем только ваш{" "}
              <strong className="text-gray-800">email-адрес</strong>, когда вы
              подписываетесь на список ожидания.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <strong className="text-gray-800">Мы НЕ собираем:</strong>
            <ul className="mt-2 space-y-1 pl-5 list-disc">
              <li>Имя и фамилию</li>
              <li>Номер телефона</li>
              <li>Адрес или другую личную информацию</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            3. Зачем нам нужен ваш email
          </h2>
          <p className="mb-4">Ваш email нужен только для одной цели:</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <strong className="text-gray-800">
              Уведомить вас о запуске Video Clipper
            </strong>
          </div>
          <p className="mb-4">
            Мы отправим вам одно письмо, когда приложение будет готово к
            использованию.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            4. Как мы защищаем ваши данные
          </h2>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Ваш email хранится на защищенных серверах</li>
            <li>Мы не передаем ваши данные третьим лицам</li>
            <li>
              Доступ к списку email'ов есть только у создателей Video Clipper
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            5. Ваши права
          </h2>
          <p className="mb-4">У вас есть право:</p>

          <div className="bg-blue-50 p-5 rounded-lg mb-4 space-y-3">
            <div>
              <strong className="text-gray-800">Отписаться</strong> — в любой
              момент написав нам на {EMAIL}
            </div>
            <div>
              <strong className="text-gray-800">Удалить данные</strong> — мы
              сразу удалим ваш email из нашей базы
            </div>
            <div>
              <strong className="text-gray-800">
                Узнать, какие данные храним
              </strong>{" "}
              — напишите нам, и мы расскажем
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            6. Изменения в политике
          </h2>
          <p className="mb-4">
            Если мы изменим эту политику, то обязательно уведомим вас по email.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4 mt-8">
            7. Вопросы?
          </h2>
          <p className="mb-4">
            Если у вас есть вопросы о ваших персональных данных, пишите:
            <strong className="text-gray-800"> {EMAIL}</strong>
          </p>

          <div className="bg-gray-800 text-white p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              Согласие на обработку персональных данных
            </h3>
            <p>
              Подписываясь на список ожидания, вы соглашаетесь с этой политикой
              конфиденциальности и даете согласие на обработку вашего
              email-адреса в указанных целях в соответствии с ФЗ-152 "О
              персональных данных".
            </p>
          </div>
        </div>
      }
    />
  );
};
