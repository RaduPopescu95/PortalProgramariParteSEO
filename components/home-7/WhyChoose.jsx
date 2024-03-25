const WhyChoose = () => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Parteneri verificati",
      text: `Am verificat atent toate statiile ITP prezente aici, astfel incat tu sa fii multumit de alegerea facuta.`,
    },
    {
      id: 2,
      icon: "flaticon-profit",
      title: "Preturi corecte",
      text: `Te poti programa rapid, navigand pe pagina partenerului din orasul tau. Acolo vei gasi tot ce ai nevoie.`,
    },
    {
      id: 3,
      icon: "flaticon-calendar",
      title: "Programare rapida",
      text: `Vei avea parte de preturi corecte si amabilitate, toate din partea unei echipe de profesionisti.`,
    },
  ];
  return (
    <>
      {whyChooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="why_chose_us home7">
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
