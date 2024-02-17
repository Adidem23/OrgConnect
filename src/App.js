import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

const apiKey = "b0e9bc5a328da6304b658548035914ddd00f8ab1bc676c79";

export default function App() {

  const [userId, setUserId] = useState();
  const [userIdState, setuserIdState] = useState(false);

  const CheckEmail = (EmailAddrs) => {

    console.log("Email Address is : " + EmailAddrs);

    var emailArray = ["adityavanshi5451@gmail.com"];

    if (emailArray.includes(EmailAddrs)) {
      console.log("You Have Authority to Create Community");
    } else {
      const element = document.querySelectorAll('.actionItemChild');
      element[2].parentElement.style.display="none";
    }
  }

  const givecall = () => {
    setTimeout(() => {
      setuserIdState(true);
    }, 1000);
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