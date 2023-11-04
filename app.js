const inpVal = document.querySelector ('#inp')
const ulli = document.querySelector ('ul')
function userInp() {
    ulli.innerHTML += `<li class="mb-2 " style="font-variant: small-caps;  font-size: 20px;">${inpVal.value}  
    <button type="button" class="btn btn-outline-warning">Edit</button>
    <button type="button" class="btn btn-outline-danger" onclick = "Del()">Delete</button>
    <li/> `











    console.log(inpVal.value);

    inpVal.value = ''

}
function Del() {
    console.log('Deleted');
    
}