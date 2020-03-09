//Task 1
//Access HTML element with id tag-line.
let tag = document.getElementById("tag-line");
//Access h2 headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll(".bg-main-content h2");
//Create the variable collect and assign it with content of tag-line.
let collect = `${tag.textContent}\n`;
//Loop through the array of headings and append the content of each heading to variable collect
for(let heading of headings){
    collect += `\t${heading.textContent}\n`;
}
//After the loop, use alert to print collect
alert(collect);







//Task 2
//Access 13th div with class name box that belongs to div with the class name bg-main-content.
//You can name the variable when_to_launch.
let boxes = document.querySelectorAll(".bg-main-content .box");
let when_to_launch = boxes[12];

//Use property children to "scoop" in array all HTML elements that belong to that div.
let scoopedelement = when_to_launch.children;
console.log(scoopedelement);

//Create the variable collect and assign it with content of heading that belongs to gotten array.
let collect1 = `${scoopedelement[0].innerText}\n${scoopedelement[1].innerText}`; 

//console.log(collect1);
//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.


//After the loop, use alert to print collect*/
alert(collect1);
