document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.getElementById(selector);
    const form = $('turnoForm');
    const cobertura = $('cobertura');
    const obraSocialField = $('obraSocialField');
    const especialidad = $('especialidad');
    //const medico = $('medico');
    const modal = new bootstrap.Modal($('graciasModal'));
    const medicoOptions = document.querySelectorAll('#medico .medico');
    
    // Mostrar/ocultar campo de obra social/prepaga
    cobertura.addEventListener('change', function() {
        if (this.value === 'Obra Social' || this.value === 'Prepaga') {
            obraSocialField.classList.remove('d-none');
            obraSocialField.querySelector('select').setAttribute('required', 'required');
        } else {
            obraSocialField.classList.add('d-none');
            obraSocialField.querySelector('select').removeAttribute('required');
        }
    });

    // Actualizar médicos según la especialidad
    especialidad.addEventListener('change', function() {
        /* // Primer intento
        const medicos = {
            'Alergia e Inmunología': ['Dra. Juana López', 'Dr. Juan Amadeo'],
            'Traumatología': ['Dra. Nancy Torres'],
            'Neumonología': ['Dr. Gerardo Ibarra', 'Dr. Luis Giolito']
        };
        medico.innerHTML = '<option value="" disabled selected>Seleccione un médico</option>';
        if (this.value) {
            medicos[this.value].forEach(med => {
                const option = document.createElement('option');
                option.value = med;
                option.textContent = med;
                medico.appendChild(option);
            });
        }*/
        medicoOptions.forEach(option => option.classList.add('d-none'));
        const $ = selector => document.querySelectorAll(selector);

        if (this.value === 'Alergia e Inmunología') {
            $('.alergia').forEach(option => option.classList.remove('d-none'));
        } else if (this.value === 'Traumatología') {
            $('.trauma').forEach(option => option.classList.remove('d-none'));
        } else if (this.value === 'Neumonología') {
            $('.neumologia').forEach(option => option.classList.remove('d-none'));
        }
    });

    // Validaciones del formulario
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation(); // Detener la propagación del evento
        }

        // Agregar clase was-validated para mostrar los errores
        form.classList.add('was-validated');

        // Si es válido, mostrar el modal y resetear el formulario
        if (form.checkValidity()) {
            event.preventDefault();
            modal.show();
            form.reset();
            form.classList.remove('was-validated');
        }
    }, false);
});
