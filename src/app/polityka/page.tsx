import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Як ЄКОР збирає, зберігає та обробляє ваші персональні дані відповідно до Закону України «Про захист персональних даних» та GDPR.",
  alternates: { canonical: "/polityka" },
};

export default function PolitykaPage() {
  return (
    <>
      <PageHeader
        title="Політика конфіденційності"
        lead={`Як ${site.legal} обробляє ваші персональні дані. Чинна з ${site.foundedYear} року.`}
        breadcrumbs={[{ label: "Політика конфіденційності" }]}
      />

      <section className="f-svc-body">
        <article className="f-legal">
          <p className="f-legal-intro">
            Ця Політика описує, як <strong>{site.legal}</strong> (далі — «Компанія», «ми»)
            збирає, використовує та захищає персональні дані відвідувачів сайту
            ekorgroup.com.ua. Документ розроблено відповідно до Закону України
            «Про захист персональних даних» №2297-VI та принципів GDPR.
          </p>

          <h2>1. Які дані ми збираємо</h2>
          <p>Ми збираємо лише ті дані, які ви добровільно надаєте:</p>
          <ul>
            <li>Ім'я або найменування — для звернення до вас</li>
            <li>Телефон та email — для зв'язку</li>
            <li>Тип об'єкта та місто — для попереднього розрахунку</li>
            <li>Текстове повідомлення — за вашою ініціативою</li>
          </ul>
          <p>
            Технічні дані: ми використовуємо мінімальний набір cookies для коректної
            роботи сайту (не для відстеження). Аналітичних або рекламних cookies без
            вашої згоди не встановлюємо.
          </p>

          <h2>2. Як ми використовуємо ваші дані</h2>
          <p>Виключно для:</p>
          <ul>
            <li>Зворотного зв'язку щодо вашого запиту</li>
            <li>Підготовки комерційної пропозиції</li>
            <li>Інформування про статус заявки</li>
          </ul>
          <p>
            <strong>Ми не передаємо дані третім особам</strong> — ні рекламним
            мережам, ні партнерам, ні афілійованим компаніям. Виняток — обов'язкові
            вимоги законодавства (наприклад, запит суду).
          </p>

          <h2>3. Зберігання та видалення</h2>
          <p>
            Дані зберігаються виключно у захищеному форматі на серверах у межах
            Європейського економічного простору. За вашою першою вимогою — видаляємо
            повністю протягом 30 днів. Для запиту видалення напишіть на{" "}
            <a href={site.emailHref}>{site.email}</a>.
          </p>
          <p>
            Якщо ми не отримали від вас зворотного зв'язку протягом 6 місяців — дані
            видаляються автоматично.
          </p>

          <h2>4. Ваші права</h2>
          <p>Ви маєте право:</p>
          <ul>
            <li>Отримати копію ваших персональних даних, які ми зберігаємо</li>
            <li>Виправити неточну інформацію</li>
            <li>Вимагати видалення («право бути забутим»)</li>
            <li>Відкликати раніше надану згоду</li>
            <li>Звернутись зі скаргою до Уповноваженого ВРУ з прав людини</li>
          </ul>

          <h2>5. Безпека</h2>
          <p>
            Дані передаються через HTTPS (TLS 1.3). Доступ до них мають лише
            уповноважені співробітники, що підписали угоду про нерозголошення. Для
            операційних завдань використовуємо ізольоване середовище без виходу в
            публічний інтернет.
          </p>

          <h2>6. Контакти</h2>
          <p>
            Щодо персональних даних звертайтесь:
            <br />
            Email: <a href={site.emailHref}>{site.email}</a>
            <br />
            Телефон: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            Адреса: {site.address}
          </p>

          <p className="f-legal-update">
            Остання редакція: {new Date().toLocaleDateString("uk-UA", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </article>
      </section>

      <style>{`
        .f-legal {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 56px;
          font: 400 16px/1.75 var(--bd);
          color: var(--tx);
        }
        .f-legal-intro {
          font: 300 18px/1.7 var(--bd);
          color: var(--tx2);
          padding-bottom: 24px;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--brd);
        }
        .f-legal h2 {
          font: 700 clamp(20px, 2.4vw, 28px) var(--hd2);
          color: var(--tx);
          text-transform: uppercase;
          letter-spacing: -0.3px;
          margin: 48px 0 16px;
        }
        .f-legal p { margin-bottom: 16px; }
        .f-legal ul {
          padding-left: 24px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .f-legal ul li {
          position: relative;
          padding-left: 16px;
        }
        .f-legal ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--g);
        }
        .f-legal a { color: var(--g); }
        .f-legal a:hover { color: var(--g-lt); }
        .f-legal-update {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid var(--brd);
          font: 300 13px var(--bd);
          color: var(--tx3);
        }
        @media (max-width: 768px) {
          .f-legal { padding: 0 24px; }
        }
      `}</style>
    </>
  );
}
