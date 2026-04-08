const Card = ({ cardClass, image, title, subtitle, description }) => (
  <div className={`${cardClass} card`}>
    <img src={image} />
    <div className="description">
      <div className="desc-1">
        <div>{title}</div>
        <p>{subtitle}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

export default Card;
