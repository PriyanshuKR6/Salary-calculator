document.getElementById("compute-btn").addEventListener("click", compute);
// console.log(a);  


function compute() {
    // take text box value
    let basicSal = document.getElementById('salary').value;
    salaryOperations.basicSalary = basicSal;
    // console.log(basicSalary);

    // console.log(hra);
    for (let key in salaryOperations) {
        if (key == 'basicSalary') {
            continue;
        }
        document.getElementById('output').
            appendChild(createPTag(key, salaryOperations[key]()));
    }
}

function createPTag(key, val) {
    const pTag = document.createElement('p');
    pTag.innerText = `${key} is : ${val}`;
    return pTag;
}






    