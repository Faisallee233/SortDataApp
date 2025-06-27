const sortButton = document.getElementById('sortButton');
const clearButton = document.getElementById('clearButton');
const outputSection = document.querySelector('.output-section');
const outputArray = document.getElementById('outputArray');
const sortmethod = document.getElementById('sortMethod');
const inputArray = document.getElementById('inputArray');


clearButton.addEventListener('click', () => {
    inputArray.value = '';
    outputArray.textContent = '';
    array = [];
    outputSection.style.display = 'none';
});


sortButton.addEventListener('click', () => {
    let resultBox = outputSection;
    let box1 = [];
     box1.push(inputArray.value.trim())
    let box = box1[0].split(',').map(Number); 

    let action = sortmethod.value;
    if(action === 'Min-Max'){
        box.sort((a, b) => {
            return parseFloat(a) - parseFloat(b);
        });
        resultBox.style.display = 'block';
        outputArray.textContent = box.join(', ');
    }
    else if(action === 'Max-Min'){
        box.sort((a, b) => {
            return parseFloat(b) - parseFloat(a);
        });
        resultBox.style.display = 'block';
        outputArray.textContent = box.join(', ');
    }
    else{
        alert('Please select a valid sorting method.');
        return;
    }

});
