function SectionHeader({
  tag,
  title,
  emphasized,
  centered = false,
  description = "",
}) {
  return (
    <>
      <div
        className="section-tag"
        style={centered ? { justifyContent: "center" } : undefined}
      >
        {tag}
      </div>
      <h2 className="section-title">
        {title}
        <br />
        <em>{emphasized}</em>
      </h2>
      {description ? <p>{description}</p> : null}
    </>
  );
}

export default SectionHeader;
