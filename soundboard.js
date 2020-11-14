var m = new Map([['b1', 'a1'], ['b2', 'a2'], ['b3', 'a3']])

function hookupSound(audio, button) {
    document.getElementById(button).addEventListener('click', function () {
        var a = document.getElementById(audio)
        a.play()
    })
}

m.forEach(hookupSound)

