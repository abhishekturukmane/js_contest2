let arr=[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2,name:"jack",age:"20",profession:"developer"},
    {id:3,name:"karen",age:"19",profession:"admin"}
]

  
// Function to render user cards
function renderUserCards(arr) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    arr.forEach(user =>{
        const userCard = document.createElement("div");
      userCard.className = "userCard";
  
     const id = document.createElement("p");
     id.textContent =  user.id;

      const name = document.createElement("p");
      name.textContent = `Name: ${user.name}`;
  
      const age = document.createElement("p");
      age.textContent = `Age: ${user.age}`;
  
      const profession = document.createElement("p");
      profession.textContent = `Profession: ${user.profession}`;
  
      userCard.appendChild(id);
      userCard.appendChild(name);
      userCard.appendChild(age);
      userCard.appendChild(profession);
  
      userList.appendChild(userCard);
    });
  }
  
  // Function to filter users by profession
  function filterUsersByProfession(profession) {
     
    const filteredUsers = arr.filter(user => user.profession === profession);
    renderUserCards(filteredUsers);
  }
  
  // Event listener for filter button
  document.getElementById("filterBtn").addEventListener("click", () => {
    const professionSelect = document.getElementById("profession");
    const selectedProfession = professionSelect.value;
    filterUsersByProfession(selectedProfession);
  });
       
    function addUser(){

        let name=document.getElementById("name")
        let prof=document.getElementById("prof")
        let age=document.getElementById("age")
        let index=arr.length
        if (name.value === "" || age.value === "" || prof.value === "") {
            alert("Please enter all the user details before clicking the add button.");
            return;
        }
        let newuser={

            id:index+1,
            name:name.value,
            age:age.value,
            profession:prof.value
        }
        arr.push(newuser)
        console.log(arr)
        
    }
        

   //}
