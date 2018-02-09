import React, { Component } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-white.svg";

class Layout extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted color="blue">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
              CONSENBUS
            </Menu.Item>
            <Menu.Item as={Link} to="/">Home</Menu.Item>

            <Dropdown item simple text="Network Stats">
              <Dropdown.Menu>
                <Dropdown.Item>Blocks</Dropdown.Item>
                <Dropdown.Item>Representatives</Dropdown.Item>
                {/*<Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>*/}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        <Container text style={{ marginTop: "7em" }}>
          {this.props.children}
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 1" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 2" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Group 3" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <Image
              centered
              size="tiny"
              src={logo}
              style={{ marginBottom: "2em" }}
            />
            <List horizontal inverted divided link>
              <List.Item as="a" href="#">Site Map</List.Item>
              <List.Item as="a" href="#">Contact Us</List.Item>
              <List.Item as="a" href="#">Terms and Conditions</List.Item>
              <List.Item as="a" href="#">Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Layout;
