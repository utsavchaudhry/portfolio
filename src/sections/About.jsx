import styles from "./About.module.css";
import SectionHeader from "../components/SectionHeader.jsx";
import FadeIn from "../components/FadeIn.jsx";
import { education, personal } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader eyebrow="01 — About" title="A bit about me" />

        <div className={styles.grid}>
          <FadeIn delay={0.05} className={styles.copy}>
            <p>
              I started in game development — building 2D learning games at
              Chimpvine, then moved into VR rehabilitation tools at UprightVR
              and Drexel research. Somewhere between engineering biometric game
              controllers and writing inverse kinematics solvers, I realized I
              wanted to build the bridge between immersive interfaces and
              physical robots.
            </p>
            <p>
              Most recently I was at{" "}
              <a
                href="https://faunarobotics.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fauna Robotics
              </a>{" "}
              wiring up teleoperation systems — ROS2 backends, React dashboards,
              and VR controls all talking to the same robot. The messy parts
              hooked me: real-time state sync, hardware quirks, the latency
              budgets between a headset and a servo.
            </p>
            <p>
              Outside of work, I tinker with 3D-printed humanoids and ESP32
              boards. The best week of last year was watching{" "}
              <strong>HOPE JR</strong> mirror my arm movements at the Humanoids
              Summit.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className={styles.sidebar}>
            <div className={styles.card}>
              <div className={styles.cardEyebrow}>Education</div>
              <div className={styles.school}>{education.school}</div>
              <div className={styles.muted}>{education.degree}</div>
              <div className={styles.muted}>{education.graduation}</div>
              <div className={styles.gpa}>{education.gpa}</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardEyebrow}>Most recent</div>
              <div className={styles.school}>Teleoperation Intern</div>
              <div className={styles.muted}>Fauna Robotics · NYC</div>
              <div className={styles.muted}>Sep 2025 — May 2026</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardEyebrow}>Coursework</div>
              <ul className={styles.coursework}>
                {education.coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
