document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');
    const searchInput = document.getElementById('searchInput');

    // Manejar la búsqueda de estudiantes
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const students = studentList.getElementsByTagName('li');
        Array.from(students).forEach((student) => {
            const studentText = student.textContent.toLowerCase();
            student.style.display = studentText.includes(searchTerm) ? '' : 'none';
        });
    });

    // Manejar el envío del formulario
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const studentName = document.getElementById('studentName').value;
        const nota1 = document.getElementById('nota1').value;
        const nota2 = document.getElementById('nota2').value;

        addStudentToList(studentName, nota1, nota2);

        // Limpiar campos
        studentForm.reset();
    });

    // Función para añadir estudiante a la lista
    function addStudentToList(name, nota1, nota2) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `${name} - Nota 1: ${nota1}, Nota 2: ${nota2}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');

        // Manejar la eliminación de estudiantes
        deleteButton.addEventListener('click', () => {
            li.classList.add('removed');
            setTimeout(() => li.remove(), 500);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        li.classList.add('added');
        studentList.appendChild(li);
    }
});
