import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(input.trim());
    }, 400); // debounce for smoother search
    return () => clearTimeout(delayDebounce);
  }, [input, onSearch]);

  return (
    <motion.form
      className="search-bar"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (!input.trim()) alert("Please enter a movie title.");
        }}
      >
        Search
      </button>
    </motion.form>
  );
}

export default SearchBar;
