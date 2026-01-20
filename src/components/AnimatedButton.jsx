// components/AnimatedButton.jsx
const AnimatedButton = ({ text, href }) => {
  return (
    <a
      href={href}
      className="
        relative inline-flex items-center gap-2
        px-6 py-3 rounded-full
        border border-blue-500
        text-blue-400 font-medium
        overflow-hidden
        transition-colors duration-300
        hover:text-white
      "
    >
      <span className="relative z-10">{text}</span>

      {/* Hover fill */}
      <span
        className="
          absolute inset-0
          bg-blue-600
          scale-0
          rounded-full
          transition-transform duration-500
          hover:scale-100
        "
      />
    </a>
  );
};

export default AnimatedButton;
