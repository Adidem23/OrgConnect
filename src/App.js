import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

const apiKey = "b0e9bc5a328da6304b658548035914ddd00f8ab1bc676c79";

export default function App() {

  const [userId, setUserId] = useState();
  const [userIdState, setuserIdState] = useState(false);

  const givecall = () => {
    setTimeout(() => {
      setuserIdState(true);
    }, 700);
  }

  const disappearElem=()=>{
    const element = document.getElementsByClassName('sc-gYbyFu sc-jneFWU erZEtn hEBgzf');
    element.item(0).innerHTML="";
  }

  const CheckEmail = (EmailAddrs) => {

    console.log("Email Address is : " + EmailAddrs);

    var emailArray = ["adityavanshi5451@gmail.com"];

    if (emailArray.includes(EmailAddrs)) {
      console.log("You Have Authority to Create Community");
    } else {
      const element = document.getElementsByClassName('sc-gYbyFu sc-jneFWU erZEtn hEBgzf');
      // if(element !== null && element.offsetWidth > 0 && element.offsetHeight > 0){
      //  element.item(0).innerHTML="";
      // }else{
      //   console.log('Elem is Loading...');
      //    disappearElem();
      // }
      
    }
  }

  userIdState ? CheckEmail(userId) : console.log("Not Able to Call");

  userId ? givecall() : console.log('userId is loading..')

  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <>
          <AmityUiKitProvider
            key={userId}
            apiKey={apiKey}
            userId={userId}
            displayName={userId}
            socialCommunityCreationButtonVisible
          >
            <AmityUiKitSocial />

          </AmityUiKitProvider>
        </>
      )}
    </div>
  );
}