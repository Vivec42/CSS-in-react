import PropTypes from "prop-types";

function Card(props) {
  return (
    <figure>
      {props.card.imgSrc ? (
        <img src={props.card.imgSrc} alt="" />
      ) : (
        <p>ERROR</p>
      )}
      <figcaption>{props.card.name}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default Card;
