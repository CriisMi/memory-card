const Card = (props) => {
  return (
    <div>
      <div
        className="image"
        style={{
          backgroundColor: `${props.background}`,
          width: "150px",
          height: "200px",
        }}
      ></div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default Card;
