// Función para abrir el modal
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Función para guardar la cita (ejemplo básico)
function saveAppointment(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var status = document.getElementById('status').value;
    var subject = document.getElementById('subject').value;
    var reason = document.getElementById('reason').value;

    // Aquí deberías enviar estos datos al servidor o manejarlos según tu aplicación
    console.log("Nombre: " + name);
    console.log("Fecha: " + date);
    console.log("Estado: " + status);
    console.log("Asunto: " + subject);
    console.log("Motivo: " + reason);

    // Cerrar el modal después de guardar la cita (opcional)
    closeModal();
}
