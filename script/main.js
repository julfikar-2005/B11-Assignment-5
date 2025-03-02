document.getElementById("Discover").addEventListener("click", function () {
    window.location.href = "main.html";
});

const colors = ["black", "Cyan", "green", "Gray ", "orange", "pink", "yellow", "red", "Sky Blue"];
let number = 0;
document.getElementById("btn-color").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[number];
    number = (number + 1) % colors.length;
})


const today = new Date();
const newDateToday = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const formatDate = today.toLocaleDateString("en-US", newDateToday);
document.getElementById("newDate").innerText = formatDate



document.getElementById("Completed").addEventListener("click", function () {
    alert("Board updated Successfully");
    const button = document.getElementById("Completed");
    button.disabled = true;
    button.style.backgroundColor = "gray";

   document.getElementById

   document.getElementById("sms").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Fix mobile Button issue at 12.30 Am</p>
   `;

   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("sms").innerHTML = ""; 
});
    
})
document.getElementById("Complete").addEventListener("click", function () {
    alert("Board updated Successfully");
    const button = document.getElementById("Complete");
    button.disabled = true;
    button.style.backgroundColor = "gray";


   document.getElementById("sm").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Add pay Success Modal at 1.30 AM</p>
   `;
   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("sm").innerHTML = ""; 
});
    
})
document.getElementById("three-btn").addEventListener("click", function () {
    alert("Board updated Successfully");
    const button = document.getElementById("three-btn");
    button.disabled = true;
    button.style.backgroundColor = "gray";


   document.getElementById("three").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Add new reaction at 1.35 AM</p>
   `;
   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("three").innerHTML = ""; 
});
    
})
document.getElementById("four-btn").addEventListener("click", function () {
    alert("Board updated Successfully");
    const button = document.getElementById("four-btn");
    button.disabled = true;
    button.style.backgroundColor = "gray";


   document.getElementById("four").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Add new emoji at 1.45 AM</p>
   `;
   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("four").innerHTML = ""; 
});
    
})
document.getElementById("five-btn").addEventListener("click", function () {
    alert("Board updated Successfully");
    const button = document.getElementById("five-btn");
    button.disabled = true;
    button.style.backgroundColor = "gray";


   document.getElementById("five").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Integrate OpenAI API at 2.00 AM</p>
   `;
   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("five").innerHTML = ""; 
});
    
})
document.getElementById("six-btn").addEventListener("click", function () {
    alert("Board updated Successfully");
    alert("congrates!!You have completed all the current task");
    const button = document.getElementById("six-btn");
    button.disabled = true;
    button.style.backgroundColor = "gray";


   document.getElementById("six").innerHTML=`
   <p class="bg-white p-4 w-fit rounded-md">You have completed the task Improve Job searching at 3.00 AM</p>
   `;
   document.getElementById("clearSms").addEventListener("click", function () {
    document.getElementById("six").innerHTML = ""; 
});
    
})


