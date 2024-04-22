const DescriptionsText = ({ firma }) => {
  // Ensure the parameter is destructured if called as a prop
  const createMarkup = () => {
    return { __html: firma?.articleContentFirst || "" }; // Adding a fallback and optional chaining
  };
  const createMarkupSecond = () => {
    return { __html: firma?.articleContentSecond || "" }; // Adding a fallback and optional chaining
  };

  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      {firma?.articleContentSecond?.length > 0 && (
        <div dangerouslySetInnerHTML={createMarkupSecond()}></div>
      )}
    </>
  );
};

export default DescriptionsText;
