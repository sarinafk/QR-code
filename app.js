document.getElementById('button').addEventListener('click', function() {  
    const inputText = document.getElementById('qrInput').value;  
    
    if (inputText.trim() === "") {  
        alert("Please enter a text or URL to generate a QR code.");  
        return;  
    }  

    const qrCodeImg = document.getElementById('qrCode');  
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;  

    qrCodeImg.src = apiUrl;  
    qrCodeImg.style.display = 'block';  
});