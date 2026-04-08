import Card from "./Card";
import ArrowButton from "./ArrowButton";

const SubtractCard = ({
  className,
  image,
  imageClass,
  text,
  showLeftArrow,
  showRightArrow,
  isLeftArrowClickable,
  isRightArrowClickable,
  onLeftClick,
  onRightClick,
  visibilityClass,
}) => (
  <div className={`${className} subtract ${visibilityClass}`}>
    <img src={image} className={imageClass} />
    <span className="text-1">{text}</span>
    {showLeftArrow && (
      <ArrowButton direction="left" onClick={onLeftClick} clickable={isLeftArrowClickable} />
    )}
    {showRightArrow && (
      <ArrowButton direction="right" onClick={onRightClick} clickable={isRightArrowClickable} />
    )}
  </div>
);

const SimpleSubtract = ({ images, text }) => (
  <div className="subtract-1 subtract">
    {images.map((img, idx) => (
      <img key={idx} src={img.src} className={img.className} />
    ))}
    <span className="text-1">{text}</span>
    <ArrowButton direction="left" />
    <ArrowButton direction="right" />
  </div>
);

const HoverCard = ({ data, showSubtract3, setShowSubtract3 }) => {
  const {
    id,
    cardClass,
    cardImage,
    cardTitle,
    cardSubtitle,
    cardDescription,
    subtractImages,
    subtractText,
    hasToggle,
    subtractCards,
  } = data;

  return (
    <div className={id} onMouseLeave={() => {
      if (hasToggle && showSubtract3) {
        setTimeout(() => setShowSubtract3(false), 500);
      }
    }}>
      <Card
        cardClass={cardClass}
        image={cardImage}
        title={cardTitle}
        subtitle={cardSubtitle}
        description={cardDescription}
      />
      {hasToggle ? (
        <>
          <SubtractCard
            {...subtractCards[0]}
            visibilityClass={showSubtract3 ? "hidden" : "visible"}
            onRightClick={() => setShowSubtract3(true)}
          />
          <SubtractCard
            {...subtractCards[1]}
            visibilityClass={showSubtract3 ? "visible" : "hidden"}
            onLeftClick={() => setShowSubtract3(false)}
          />
        </>
      ) : (
        <SimpleSubtract images={subtractImages} text={subtractText} />
      )}
    </div>
  );
};

export default HoverCard;
