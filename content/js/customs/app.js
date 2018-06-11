//https://rickandmortyapi.com/documentation
// https://rickandmortyapi.com/api/character
document.addEventListener('DOMContentLoaded', function(){ 
    var app = new Vue({
        el: '#app',
        data: {
            characters: {},
            text: 'hello world'
        },
        methods: {
            getCharacters: function () {                 
                axios.get('https://rickandmortyapi.com/api/character')
                    .then(response => {
                    this.characters = response.data;
                    console.log(this.characters.results);
                });
            }
        },
    });
}, false);