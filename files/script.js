var n1 = document.querySelector('.n1')
        var n2 = document.querySelector('.n2')
        var n3 = document.querySelector('.n3')
        var vis = document.querySelector('.visor')
        var cond = 0
        var cont = 0

        vis.innerHTML = ''

        function entOne() {
            vis.innerHTML = 'Não quero!'
            cont++
        }
        function entTwo() {
            vis.innerHTML = 'Isso não!'
            cont++
        }
        function entThree() {
            vis.innerHTML = 'Ela é meu sonho!♥♥'
            cont++
        }