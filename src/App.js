import React, { useEffect, useRef } from "react";
import "./styles.js";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main.js";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

function App() {
  const classes = useStyles();

  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState && speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  //xs->extra small devices it will take full width
  return (
    <div className="App">
      <Grid
        className={classes.grid}
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
