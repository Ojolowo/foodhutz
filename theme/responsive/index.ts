const sizes = {
  $xsmall: "468px",
  $small: "767px",
  $medium: "992px",
  $large: "1200px",
  $xlarge: "1400px",
};

const responsive = (key: keyof typeof sizes) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${sizes[key]}) { ${style} }`;
};

export default responsive;
