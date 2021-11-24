// Write your code here!

//create a new variable and get element
const main=document.querySelector('#main')
//remove element
main.remove()

//STEP 2: has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement('h1') //creates newHeader variable

//STEP 3: has a 'newHeader' variable that points to node 'h1#victory'
newHeader.setAttribute("id", "victory")

//STEP 4: has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = 'Emily is the champion'

//Finally, append the changes you made
document.body.append.newHeader