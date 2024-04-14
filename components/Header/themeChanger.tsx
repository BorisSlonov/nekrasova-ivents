"use client";

const ThemeChanger = () => {
  return (
    <div>
      <button
        onClick={() => {
          const html = document.querySelector("html");
          if (html) {
            html.dataset.theme =
              html.dataset.theme === "light" ? "dark" : "light";
          }
        }}
      >
        change
      </button>
    </div>
  );
};

export default ThemeChanger;
