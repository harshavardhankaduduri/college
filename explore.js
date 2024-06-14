document.addEventListener('DOMContentLoaded', function() {
    const telanganaButton = document.getElementById('telangana');
    const andhrapradeshButton = document.getElementById('andhrapradesh');
    
    telanganaButton.addEventListener('click', function() {
        window.location.href = 'telangana.html'; // Redirect to Telangana page
    });
    
    andhrapradeshButton.addEventListener('click', function() {
        window.location.href = 'andhrapradesh.html'; // Redirect to Andhra Pradesh page
    });
});
