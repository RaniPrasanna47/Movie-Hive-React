import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="about-card">
        <h2>About This Project 🎬</h2>
        <p>
          This movie explorer app allows users to search and discover various movies and shows of different genres using the OMDb API.
          Built with React, Axios, Framer Motion, and a focus on responsive UI, it includes live search,
          detailed movie info, and a clean design—crafted with care.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
