import Header from "@/components/header/Header";
import styles from './page.module.scss'
import Feature from "@/components/ui/feature";
import Card from "@/components/ui/card/card";

const CARDS_ARR = [
  {
    title: "Instant issue reporting",
    description: "Capture bugs with one click, including device details, and user context—saving 3x the time compared to traditional methods."
  },
  {
    title: "Collaborate without barriers",
    description: "Bring developers, clients, and stakeholders together to comment, suggest changes, and track updates—all in one place."
  },
  {
    title: "Effortless task management",
    description: "Create pre-filled tasks, cutting 70% of manual work - integration with Jira, Slack & more."
  },
  {
    title: "Resolve tasks with AI",
    description: "Our AI can now solve tasks for you. It has full context, sees the page, and can offer you solutions."
  },
  {
    title: "Integrations",
    description: "Connect Toolbar with Zapier, Make.com, Linear, Jira, and more to keep your workflows smooth."
  },
  {
    title: "Browser extension",
    description: "Capture and report issues even faster with our upcoming browser extension."
  }
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.heroWelcome}>
        <h1>
          <span>Stop Printscreening</span>
          <span>Your Product Bugs</span>
          <span className={styles.corner}></span>
          <span className={styles.corner}></span>
          <span className={styles.corner}></span>
          <span className={styles.corner}></span>
        </h1>
        <p>
          <span>Track issues, directly on your website with </span>
          <span>help of a simple toolbar</span>
        </p>
        <div>
          <div>
            <span>https://</span>
            <input type="text" placeholder="yourwebsite.com" />
          </div>
          <button>Start Collaborating</button>
        </div>
      </section>
      <section className={styles.features}>
        <Feature 
          icon="mingcute:web-fill"
          text="Leave comments directly on your website—no emails, no confusion, just instant collaboration."
          direction="slideRight"
        />
        <Feature 
          icon="iconamoon:comment-add-fill"
          text="Track bugs with precision—get all details like viewport, device, and browser info."
          direction="slideUp"
        />
        <Feature 
          icon="system-uicons:chain"
          text="Generate shareable links to guide your team or clients straight to the exact issue on the page."
          direction="slideLeft"
        />
      </section>
      <section className={styles.cardsContainer}>
        <h1>Get 5x more done, faster.</h1>
        <main>
          {CARDS_ARR.map((card, index) => (
            <Card
              key={card.title.replace(" ", "-")}
              title={card.title}
              description={card.description}
              image={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/useTool/component-${index + 1}.webp`}
            />
          ))}
        </main>
      </section>
    </div>
  );
}
