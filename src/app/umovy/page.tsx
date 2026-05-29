import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Умови використання",
  description:
    "Правила використання сайту ekorgroup.com.ua. Інтелектуальна власність, відповідальність, зміни умов.",
  alternates: { canonical: "/umovy" },
};

export default function UmovyPage() {
  return (
    <>
      <PageHeader
        title="Умови використання"
        lead={`Правила використання сайту ${site.legal}.`}
        breadcrumbs={[{ label: "Умови використання" }]}
      />

      <section className="f-svc-body">
        <article className="f-legal">
          <p className="f-legal-intro">
            Користуючись сайтом ekorgroup.com.ua, ви автоматично погоджуєтесь з
            нижчевикладеними умовами. Якщо ви не згодні — будь ласка, припиніть
            користування сайтом.
          </p>

          <h2>1. Загальні положення</h2>
          <p>
            Власник сайту — <strong>{site.legal}</strong>. Сайт надається «як є», без
            будь-яких прямих чи опосередкованих гарантій. Інформація має ознайомчий
            характер та не є офертою у розумінні Цивільного кодексу України.
          </p>
          <p>
            Точні умови співпраці визначаються індивідуальним договором, що
            підписується сторонами офлайн.
          </p>

          <h2>2. Інтелектуальна власність</h2>
          <p>
            Усі матеріали сайту (логотип, тексти, фотографії, графіка, відео, дизайн
            сторінок) належать Компанії та захищені Законом України «Про авторське
            право і суміжні права».
          </p>
          <p>Заборонено без письмового дозволу Компанії:</p>
          <ul>
            <li>Копіювати, публікувати, розповсюджувати матеріали повністю або частково</li>
            <li>Використовувати матеріали у комерційних цілях</li>
            <li>Створювати похідні продукти на основі матеріалів сайту</li>
            <li>Видаляти або змінювати знаки авторського права</li>
          </ul>
          <p>
            Цитування дозволяється з обов'язковим зазначенням джерела та активним
            посиланням на сайт.
          </p>

          <h2>3. Обмеження відповідальності</h2>
          <p>
            Компанія не несе відповідальності за:
          </p>
          <ul>
            <li>Тимчасову недоступність сайту з технічних причин або форс-мажор</li>
            <li>Збитки, що виникли через використання інформації сайту до підписання договору</li>
            <li>Дії третіх осіб, які створюють копії сайту або фішингові сторінки</li>
            <li>Зміст зовнішніх сайтів, на які можуть вести посилання</li>
          </ul>

          <h2>4. Зворотний зв'язок та форми</h2>
          <p>
            Заповнюючи форму на сайті, ви даєте згоду на обробку персональних даних
            відповідно до{" "}
            <a href="/polityka">Політики конфіденційності</a>. Поля з зірочкою (*) —
            обов'язкові. Ми відповідаємо протягом 30 хвилин у робочий час.
          </p>

          <h2>5. Зміни умов</h2>
          <p>
            Компанія залишає за собою право змінювати ці Умови у будь-який час без
            попереднього повідомлення. Актуальна редакція завжди доступна на цій
            сторінці. Продовжуючи користування сайтом після оновлення, ви погоджуєтесь
            з новими умовами.
          </p>

          <h2>6. Юрисдикція</h2>
          <p>
            Будь-які спори, що виникають у зв'язку з використанням сайту, вирішуються
            згідно з законодавством України. Місце розгляду спорів — суди за місцем
            реєстрації Компанії.
          </p>

          <h2>7. Контакти</h2>
          <p>
            Питання та претензії:
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
