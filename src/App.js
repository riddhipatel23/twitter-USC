import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "./assets/twitter-logo.png";
import { Button, Form, Image } from "react-bootstrap";
function App() {
  const [userName, setUserName] = useState("");
  const [response1, setResponse] = useState("");
  const [tweets, setTweets] = useState("");

  /**
   * The following function checks if the user exist with the username or not?
   * Also it creates a json data of the user.
   */
  async function checkUser() {
    const url = "https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/by/username/" + userName;
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "bearer AAAAAAAAAAAAAAAAAAAAAKA5VwEAAAAAX5bQCaMIkmILPqzfnSpiY2jWHig%3DXnrvQtyaj9YHIK7X9ZlBZ88Be9eszFyMMnUnr9GJPbdN4FpPB1",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponse(JSON.stringify(data)))
      .catch((error) => console.error(error));
  }
  /**
   * The following function get the tweets for the user with the current user name.
   */
  async function getTweets() {
    const url1 = "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + userName + "&count=10";
    await fetch(url1, {
      method: "GET",
      headers: {
        Authorization: "bearer AAAAAAAAAAAAAAAAAAAAAKA5VwEAAAAAX5bQCaMIkmILPqzfnSpiY2jWHig%3DXnrvQtyaj9YHIK7X9ZlBZ88Be9eszFyMMnUnr9GJPbdN4FpPB1",
      },
    })
      .then((response) => response.json())
      .then((data) => setTweets(JSON.stringify(data)))
      .catch((error) => console.error(error));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Image style={{ height: 200, width: 200 }} src={mainLogo} />
      </header>
      <div className="App-body">
        <Form>
          <Form.Label>Twitter Username:</Form.Label>
          <Form.Control
            style={{ width: 600, marginBottom: 10 }}
            placeholder="Please enter the username"
            onChange={(input) => {
              setUserName(input.target.value);
            }}
          ></Form.Control>
          {response1.includes("data") && <Form.Label>The user exist!</Form.Label>}
          {!response1.includes("data") && response1.length !== 0 && <Form.Label>The user does not exist!</Form.Label>}
        </Form>
        <Button style={{ marginBottom: 10 }} type="submit" onClick={checkUser}>
          Check username.
        </Button>
        {response1.includes("data") && <Button onClick={getTweets}>Retrive tweets.</Button>}
        {tweets.length !== 0 && (
          <Form>
            <Form.Label>Tweets retrieved!</Form.Label><br></br>
            <Form.Label>Press the button below to download 10 tweets of the user</Form.Label>
          </Form>
        )}
        {tweets.length !== 0 && (
          <Button style={{ marginTop: 10 }} href={`data:text/json;charset=utf-8,${encodeURIComponent(tweets)}`} download="tweets.json">
            Download 10 tweets.
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
