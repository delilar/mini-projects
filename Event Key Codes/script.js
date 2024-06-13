const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    let key = event.key;
    let keyCode = event.keyCode;
    let code = event.code;

    insert.innerHTML = `
        <div class="key">
            ${key === ' ' ? 'Space' : key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${code}
            <small>event.code</small>
        </div>
        <div class="key">
            Press any key to get the keyCode
        </div>
    `
})

