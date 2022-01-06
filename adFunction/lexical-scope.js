function outer(){
    let movie = "spiderman - far from home"

    function inner(){
        let movie = 'spiderman - no home';

        function extraInner(){
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}
outer();
