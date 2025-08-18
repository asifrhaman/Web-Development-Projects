let textInput = document.getElementById('textInput');
let plus = document.getElementById('plus');
let taskList = document.getElementById('taskList');

plus.addEventListener('click', () => {
    let text = textInput.value.trim();  // get input value

    if (text !== "") {
        // create <li>
        let li = document.createElement('li');

        // create radio button
        let radio = document.createElement('input');
        radio.type = 'radio';

        // create span for text
        let span = document.createElement('span');
        span.textContent = text;

        // create delete button
        let delBtn = document.createElement('button');
        delBtn.textContent = "✖";
        delBtn.addEventListener('click', () => {
            li.remove();
        });

        // add elements inside li
        li.appendChild(radio);
        li.appendChild(span);
        li.appendChild(delBtn);

        // add li to task list
        taskList.appendChild(li);

        // clear input
        textInput.value = "";
    }
});
