function aireqeust(userInput){
     fetch(
          "backendName",
          {
               method: "post",
               body:  `${userInput}`
          }
     )
}