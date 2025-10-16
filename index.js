const qoutes= document.querySelector(".quote");
const title = document.querySelector(".title")
const button = document.querySelector(".footer")


async function GenrateQoute(){
 let randomslip = Math.floor(Math.random() * 224) + 1;

const url =`https://api.adviceslip.com/advice/${randomslip}`
  try {
    const res = await fetch(url)
    const data =await res.json()



     const advice = data.slip.advice
const id =data.slip.id

 qoutes.textContent = `"${advice}"`;
  title.textContent = `Advice #${id}`;
    console.log(data);


    
        } catch (error) {
                console.error("Error fetching advice:", error);
            qoutes.textContent = "Oops! Something went wrong.";
            title.textContent = "";
        }

}


GenrateQoute()


   button.addEventListener("click", function(e){
e.preventDefault()
GenrateQoute()

})


