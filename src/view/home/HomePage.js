import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
class HomePage extends PureComponent {
  render() {
    return (
      <center>
        <div
          style={{
            padding: 80,
          }}
        >
          <Grid container spacing={3}>
            <div>Home Page </div>
          </Grid>
        </div>
      </center>

    );
  }
}

export default HomePage;
