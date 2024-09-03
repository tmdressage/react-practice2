import { BrowserRouter, Link } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/Styled.Jsx";
import { StyledComponents } from "./components/StyledComponents.jsx";
import { Emotion } from "./components/Emotion.jsx";
import { Router } from "./router/Router.jsx";
// import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
      </div>
      <BrowserRouter>
        <div className="App">
          <InlineStyle />
          <CssModules />
          <StyledJsx />
          <StyledComponents />
          <Emotion />
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">page1</Link>
          <br />
          <Link to="/page2">page2</Link>
          <br />
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}
