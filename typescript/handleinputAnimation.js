    
   //reduce text/code section of program
   // also reduced loadtime for the users pc
    function animateToNextPage(){
    const inputElement = document.getElementById("A I, text box, input your question here")
    inputElement?.addEventListener("click", e => {

        document.body.classList.add("page-exit")
    setTimeout(() => {
        window.location.replace(
            "file:///Users/salam/program%20%28web%20edition%29/minimaltext/responseScreen.html"
        )
    }, 300)
})
}

 window.addEventListener("DOMContentLoaded", () => {
          animateToNextPage()
    }
)
