import Header from "@/components/header/Header";
import styles from './page.module.scss'
import Feature from "@/components/ui/feature";
import Card from "@/components/ui/card/card";
import FaqCard from "@/components/ui/faq-card/FaqCard";
import CommentCard from "@/components/ui/com-card/ComCard";
import Footer from "@/components/footer/Footer";

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

const CARDS_FAQ = [
  {
    title: "What is Toolbar and how does it help with website collaboration and feedback?",
    description: "Toolbar is an easy-to-use website collaboration tool that allows teams and clients to work together seamlessly by sharing feedback, comments, and bug reports directly on any web page. By collecting everyone’s ideas in one organized space, Toolbar makes communication simple and clear, so your projects move forward faster."
  },
  {
    title: "How do I add Toolbar to my website and invite my team or clients?",
    description: "Getting started with Toolbar is simple! Just add our script to your website. Then, send a secure guest link to your team members or clients. They enter their name, join the project instantly, and can start giving feedback or collaborating without any need to sign up or install anything."
  },
  {
    title: "How does Toolbar improve team collaboration and bug tracking?",
    description: "Toolbar turns feedback into clear, actionable tasks. Users can leave visual comments, screenshots, and bug reports directly on the website, making discussions specific and easy to follow. All feedback is shared in real time, so your team stays in sync. Integrations with Jira and Slack let you track issues and get updates where your team already works."
  },
  {
    title: "Can anyone use Toolbar, even if they are not technical?",
    description: "Yes! Toolbar is built for everyone—project managers, developers, designers, and clients. Anyone with the guest link can simply enter their name and start leaving feedback or joining the conversation. There’s no complicated setup, making it easy for any client or team member to participate."
  },
  {
    title: "Does Toolbar integrate with other collaboration tools like Jira or Slack",
    description: "Yes, Toolbar offers smooth integrations with both Jira and Slack. You can send bug reports and feedback directly to your Jira board or receive notifications in your Slack channels. This keeps your workflow connected and ensures that your whole team stays up to date without extra steps."
  },
]

const CARDS_COMMENTS = [
  {
    name: "Denis Bradu",
    job: "Founder Fintaxy",
    descritpion: "When developing a complex finance product, constant changes and modifications are inevitable. This tool has doubled our speed in integrating changes and incorporating client feedback, as well as improving internal collaboration within our team."
  },
  {
    name: "Bogdan",
    job: "CEO at Decebal",
    descritpion: "Toolbar is a huge shortcut between the client and our web application."
  },
  {
    name: "Dorian Lesnic",
    job: "CEO at CardNeto",
    descritpion: "I love how easy it is to leave comments directly on the website! Instead of sending screenshots or Google Docs, I can mark everything visually. It saves so much time and makes collaboration easy."
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
        <h1>
          <span>Get </span>
          <span style={{
            animationDelay: "100ms",
          }}>5x </span>
          <span style={{
            animationDelay: "200ms",
          }}>more </span>
          <span style={{
            animationDelay: "300ms",
          }}>done, </span>
          <span style={{
            animationDelay: "400ms",
          }}>faster.</span>
        </h1>
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
      <section className={styles.comments}>
        <h1>See what other founders say.</h1>
        <main>
          {CARDS_COMMENTS.map((com, index) => (
            <CommentCard
              key={com.name}
              name={com.name}
              job={com.job}
              description={com.descritpion}
              delay={index * 100}
              image={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/useTool/guy-${index + 1}.webp`}
            />
          ))}
        </main>
      </section>
      <section className={styles.faqWrapper}>
          <h1>FAQ</h1>
          <main>
            {CARDS_FAQ.map((card) => (
              <FaqCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </main>
      </section>
      <Footer />
    </div>
  );
}
