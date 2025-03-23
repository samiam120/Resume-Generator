export function Summary(props) {
  return (
    <div className="summary">
      <h2>SUMMARY</h2>
      <hr />
      <p>
        {props.summary
          ? props.summary
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </p>
    </div>
  );
}
