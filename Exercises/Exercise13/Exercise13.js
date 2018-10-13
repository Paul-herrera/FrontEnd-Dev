var content = document.getElementById('content');

function add(id){
    return content.classlist.add(id);
}

function remove(id){
    return content.classlist.remove(id);
}

function toggle(id){
    return content.classlist.toggle(id);
}

//Part 1 A.
function updateBlue(){
  add('blue');
}
document.getElementById('btnAddBlue').addEventListener ('click', updateBlue);

//Part 1 B.
function updateNotBlue(){
  remove('blue');
}
document.getElementById('btnRemoveBlue').addEventListener ('click', updateNotBlue);

//Part 1 C.
function updateToggleBlue(){
  toggle('blue');
}
document.getElementById('btnToggleBlue').addEventListener ('click', updateToggleBlue);

//Part 2 A.
function updateAddTheme(){
  add('theme');
}
document.getElementById('btnAddTheme').addEventListener ('click', updateAddTheme);

//Part 2 B.
function updateRemoveTheme(){
  remove('theme');
}
document.getElementById('btnRemoveTheme').addEventListener ('click', updateRemoveTheme);

//Part 2 C.
function updateToggleTheme(){
  toggle('theme');
}
document.getElementById('btnToggleTheme').addEventListener ('click', updateToggleTheme);




















var content = document.getElementById('content');
//Part 1 A.
function updateBlue(){
  content.classList.add('blue')
};
document.getElementById('btnAddBlue').addEventListener ('click', updateBlue);

//Part 1 B.
function updateNotBlue(){
  content.classList.remove('blue')
};
document.getElementById('btnRemoveBlue').addEventListener ('click', updateNotBlue);

//Part 1 C.
function updateToggleBlue(){
  content.classList.toggle('blue')
};
document.getElementById('btnToggleBlue').addEventListener ('click', updateToggleBlue);

//Part 2 A.
function updateAddTheme(){
  content.classList.add('theme')
};
document.getElementById('btnAddTheme').addEventListener ('click', updateAddTheme);

//Part 2 B.
function updateRemoveTheme(){
  content.classList.remove('theme')
};
document.getElementById('btnRemoveTheme').addEventListener ('click', updateRemoveTheme);

//Part 2 C.
function updateToggleTheme(){
  content.classList.toggle('theme')
};
document.getElementById('btnToggleTheme').addEventListener ('click', updateToggleTheme);