import "./Slider.css";
const Slider = () => {
  const brands = [
    "audi",
    "peugeot",
    "hyundai",
    "honda",
    "chevrolet",
    "mercedes",
    "bmw",
    "subaru",
    "ford",
    "jac",
    "mazda",
    "mitsubishi",
  ];
  return (
    <div className="banner-slider">
      <div className="slide-track">
        {brands.concat(brands, brands).map((brand, index) => (
          <div key={index} className="slide">
            <img src={`./brands/${brand}.svg`} alt={brand} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
