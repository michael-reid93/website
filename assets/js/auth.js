// use one time pad for perfect secrecy
function enc(v) {
    var l = eval(atob('WzYyLCAxMzAsIDE5MSwgMTMwLCAxMjEsIDE0MSwgMjEsIDQzLCAyNTAsIDE4OCwgNTUsIDk3LCA3MCwgOCwgMTI5LCAxNzIsIDE0MCwgMjMzLCA5NywgMTMzLCAyMDMsIDE0OSwgNDksIDIxMCwgMjQ3LCA4NSwgMzEsIDEwNiwgMTQwLCA5NCwgMTgzLCA0OCwgMTM5LCAxNDUsIDM4LCA5NSwgNF0='))
    var o = []
    for(var i = 0; i < v.length; i++) {
        o.push(l[i] ^ v.charCodeAt(i))
    }
    return o
}

window.onload = function() {
    document.getElementById('adminform').onsubmit = function() {
        var inp = document.getElementById('password').value
        var fb = document.getElementById('fb')
        var a = eval(atob('Wzc3LCAyNDcsIDIwNywgMjMxLCAxMSwgMTYwLCAxMDIsIDc4LCAxNTMsIDIwNiwgODIsIDIxLCAxMDcsIDEyMywgMjI4LCAyMDcsIDI0OSwgMTU1LCA0LCAyMjUsIDIzMCwgMjQ0LCA4NSwgMTkxLCAxNTgsIDU5LCA1MCwgMjYsIDIzNywgNDgsIDIxMCwgOTIsIDE2NSwgMjQ5LCA4MiwgNTAsIDEwNF0='))
        var c = enc(inp)
        if(a.length != c.length) {
            fb.innerText = 'Incorrect Password'
            return false
        }
        for(var i = 0; i < a.length; i++) {
            if(a[i] != c[i]) {
                fb.innerText = 'Incorrect Password'
                return false
            }
        }
        fb.innerText = 'Success! Logging in...'
        location.href = '/admin/' + inp
        return false
    }
}
