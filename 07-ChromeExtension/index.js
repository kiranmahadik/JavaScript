let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


//localStorage.setItem("myName", "Kiran Mahadik");
//let name1 = localStorage.getItem("myName");
//console.log(name1);

//localStorage.clear();

//console.log(ulEl);

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


/*
const tabs = [
    { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]
*/


tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //console.log(tabs[0].url);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })

})



function render(leads) {
    let listItems = "";  // this line is required for method-3

    for (let i = 0; i < leads.length; i++) {

        //********************* method - 1 ***********************************************/
        //ulEl.innerHTML = ulEl.innerHTML + "<li>" + leads[i] + "</li>";
        //*****************************************************************************/

        //********************* method - 2 ***********************************************/
        // Another way to write above line
        // Steps :
        // 1] create element
        // 2] set text content
        // 3] append to ul
        /*const li = document.createElement("li");
        li.textContent = leads[i];
        ulEl.append(li);*/
        //******************************************************************************/

        //******************** method - 3 ***********************************************/
        // listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + myLeads[i] + "</a></li>"

        // We can write above line in follwing way : 
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `

    }
    ulEl.innerHTML = listItems;  // this line is required for method-3

}


deleteBtn.addEventListener("dblclick", function () {
    //console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    //console.log("Button clicked from addEventListener");
    //console.log(myLeads);
    inputEl.value = "";

    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);

    // To verify that it works:
    //console.log(localStorage.getItem("myLeads"));
});

