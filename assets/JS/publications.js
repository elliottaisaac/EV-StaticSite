const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const grayBox = document.getElementsByClassName('grayBox')
const list = document.getElementById('listItems')

box1.addEventListener('click', () => {
    list.textContent = ''
    box1.classList.add('pub-gray-box')
    box2.classList.remove('pub-gray-box')
    box3.classList.remove('pub-gray-box')
    box4.classList.remove('pub-gray-box')
    box5.classList.remove('pub-gray-box')

    let items = [
        'placeholder content',
    ]

    items.forEach(item => {
        let newItem = document.createElement('li')
        newItem.textContent = item
        list.appendChild(newItem)
    });
})

box5.addEventListener('click', () => {
    list.textContent = ''
    box5.classList.add('pub-gray-box')
    box1.classList.remove('pub-gray-box')
    box2.classList.remove('pub-gray-box')
    box3.classList.remove('pub-gray-box')
    box4.classList.remove('pub-gray-box')

    let items = [
        'Glossary(PDF)',
        'Gallery Guide(PDF)',
        'Visitor Guide(PDF)',
        ' Resource Guide(PDF)',
        'Curricular Concepts(PDF)',
        'Media Toolkit(PDF)',
    ]

    items.forEach(item => {
        let newItem = document.createElement('li')
        newItem.textContent = item
        list.appendChild(newItem)
    });
})