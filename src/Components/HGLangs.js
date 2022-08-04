const HGLangs = () => {
  const langs = [
    "हिन्दी",
    "বাংলা",
    "తెలుగు",
    "मराठी",
    "தமிழ்",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "മലയാളം",
  ];
  return (
    <div className="g-langs hide">
      Google offered in:
      {langs.map((lang, index) => (
        <button
          className="g-lang link hover-underline cursor-pointer"
          key={index}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default HGLangs;
