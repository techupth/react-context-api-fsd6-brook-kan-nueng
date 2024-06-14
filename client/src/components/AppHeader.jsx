function AppHeader(props) {
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {props.name} </h2>
    </div>
  );
}

export default AppHeader;
