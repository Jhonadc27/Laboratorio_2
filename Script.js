document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que la página se recargue

    // Obtener los valores de los inputs
    let name = document.getElementById('name').value;
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;

    // Crear un nuevo elemento li para la lista de estudiantes
    let studentList = document.getElementById('studentList');
    let li = document.createElement('li');
    li.textContent = `${name} - Nota 1: ${nota1}, Nota 2: ${nota2}`;

    // Crear botón de eliminar
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete');

    // Añadir funcionalidad para eliminar el estudiante
    deleteBtn.addEventListener('click', function() {
        studentList.removeChild(li);
    });

    // Añadir el botón al li y el li a la lista
    li.appendChild(deleteBtn);
    studentList.appendChild(li);

    // Limpiar los campos del formulario
    document.getElementById('studentForm').reset();
});
