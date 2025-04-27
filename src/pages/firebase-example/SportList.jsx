import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SportList from "../../components/add-space/SportList";
import Body from "../../components/body/Body";
import sportImage from "../../assets/img/sportcanary.jpg"; 
import { useTranslation } from "react-i18next";

function AddingSport() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <Header />

      {/* Sección principal con imagen de fondo */}
      <Body backgroundImage={sportImage}>
        <section className="adding-sport-section">
          <h1 className="section-title">{t("Añadir Nueva Cancha Deportiva")}</h1>
          <p className="section-description">
            {t("Registra un nuevo espacio deportivo para compartir con la comunidad.")}
          </p>
          <div className="sport-form-container">
            {<SportList />}
          </div>
        </section>
      </Body>

      {/* Contenedor extra para añadir otro componente */}
      <div className="extra-component-container">
        {/* Agrega aquí otro componente cuando lo necesites */}
      </div>

      <Footer />
    </div>
  );
}

export default AddingSport;
