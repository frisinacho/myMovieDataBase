
angular
    .module("misPelisSeriesApp")
    .directive("votacion", ["$compile", function($compile) {

        return {
            restrict: "AE",
            scope: {
                media: "@"
            },
            link: function(scope, elemento) {

                var mediaComoNumero = parseFloat( scope.media );
                var mediaRedondeada = Math.round(mediaComoNumero);

                var vista = "<div>";

                for ( var  f = 0; f < mediaRedondeada; f++ ) {

                    vista += "<span class='glyphicon glyphicon-star'></span>";
                }

                for ( var f = 0, F = 10 - mediaRedondeada; f < F; f++ ) {

                    vista += "<span class='glyphicon glyphicon-star-empty'></span>";
                }

                vista += "</div>";

                var nuevoElemento = angular.element( vista );
                var nuevoElementoCompilado = $compile( nuevoElemento )( scope );

                elemento.replaceWith( nuevoElementoCompilado );
            }
        };
    }]);