import ErrorTemplate from "./ErrorTemplate";

export default function Page401() {
  return (
    <ErrorTemplate
      code="403"
      title="Prieiga prie puslapio yra draudžiama"
      message="Jūs neturite pakankamai teisių pasiekti šį puslapį."
      color="#dc3545"
      hoverColor="#c82333"
    />
  );
}