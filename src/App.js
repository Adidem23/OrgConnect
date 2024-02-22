import { useState } from "react";
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit"
import Login from "./Login"
import { GoogleGenerativeAI } from "@google/generative-ai"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import BorderExample from "./BorderExample";
import Sidebar from "./components/Sidebar";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from "@heroicons/react/24/solid"
const genAI = new GoogleGenerativeAI("AIzaSyDfazWK5xqM82qJqxGTfqrWMac6PE8Cz6o")
const apiKey = "b0e9bc5a328da6304b658548035914ddd00f8ab1bc676c79"



function App() {

  const [userId, setUserId] = useState();
  const [userIdState, setuserIdState] = useState(false);
  const [ChatResponse, setChatResponse] = useState("");
  const [Input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [Clicked, setClicked] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const CheckEmail = (EmailAddrs) => {

    console.log("Email Address is : " + EmailAddrs);

    var emailArray = ["adityavanshi5451@gmail.com"];

    if (emailArray.includes(EmailAddrs)) {
      console.log("You Have Authority to Create Community");
    } else {
      const element = document.querySelectorAll('.actionItemChild');
      element[2].parentElement.style.display = "none";
    }
  }

  const givecall = () => {
    setTimeout(() => {
      setuserIdState(true);
    }, 1000);
  }

  userIdState ? CheckEmail(userId) : console.log("Not Able to Call");

  userId ? givecall() : console.log('userId is loading..');

  const GenerateChatResponse = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${Input}`
      const result = await model.generateContent(prompt);
      const response = result.response;
      const realtext = JSON.stringify(response.text());
      setChatResponse(realtext);
    } catch (err) {
      alert(`${err} is occured`);
    }

  }

  const handleEvent = async (e) => {
    e.preventDefault();
    setClicked(true);
    await GenerateChatResponse();
    setLoading(false);
  };

  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <>
          <div className="MainFlexClass">
          <Sidebar/>
            {/* <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
              <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                  Explore
                </Typography>
              </div>
              <List>
                <ListItem onClick={handleShow} style={{textAlign:"center"}}>
                  <ListItemPrefix>
                    <PresentationChartBarIcon style={{height:'5rem' ,width:'5rem'}}/>
                  </ListItemPrefix>
                   <p style={{margin:'auto',width:'fit-content'}}>Ask AI</p>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ShoppingBagIcon style={{height:'5rem' ,width:'5rem'}} />
                  </ListItemPrefix>
                  <a href="https://refmemeet.vercel.app/" target="_blank"><p style={{margin:'auto',width:'fit-content' ,display:'block'}}>Create Meet</p></a>
                </ListItem>
              </List>
            </Card> */}

            <Modal show={show} onHide={handleClose} backdrop="static">
              <Modal.Header closeButton>
                <Modal.Title>ClubSpark GPT</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ask Question..?"
                      autoFocus
                      onChange={(e) => { setInput(e.target.value) }} />
                  </Form.Group>
                </Form>
                {Clicked ? <>{Loading ? <><BorderExample /></> : <>{ChatResponse ? <><p>{ChatResponse}</p></> : <></>}</>}</> : <></>}

              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleEvent}>
                  Ask
                </Button>
              </Modal.Footer>
            </Modal>

            <AmityUiKitProvider
              key={userId}
              apiKey={apiKey}
              userId={userId}
              displayName={userId}
              socialCommunityCreationButtonVisible>
              <AmityUiKitSocial />

            </AmityUiKitProvider>
          </div>

        </>
      )}
    </div>
  );
}

export default App