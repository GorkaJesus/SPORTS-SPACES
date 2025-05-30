import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../services/i18n";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
