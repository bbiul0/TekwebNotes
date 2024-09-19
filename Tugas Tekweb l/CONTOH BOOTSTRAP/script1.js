function updateDisplay() {
    // Ambil nilai dari input
    var userText = document.getElementById("inputText").value;
    var pattern = document.getElementById("inputPattern").value;

    // Jika tidak ada input teks, tampilkan pesan error
    if (userText.trim() === "") {
        document.getElementById("displayArea").innerHTML = "<p class='text-danger'>Please enter some text!</p>";
        return;
    }

    // Tentukan pola berdasarkan pilihan pengguna
    var displayContent = "";
    switch(pattern) {
        case "star":
            displayContent = userText.split("").join(" * ");
            break;
        case "dash":
            displayContent = userText.split("").join(" - ");
            break;
        case "hash":
            displayContent = userText.split("").join(" # ");
            break;
        default:
            displayContent = userText; // Jika tidak ada pattern dipilih, tampilkan teks biasa
    }

    // Update konten di area display
    document.getElementById("displayArea").innerHTML = "<p>" + displayContent + "</p>";
}
