
angular
    .module("misPelisSeriesApp")
    .directive("generos", ["$compile", function($compile) {

        return {
            restict: "AE",
            scope: {
                coleccion: "="
            },
            link: function(scope, elemento) {

                var vista = "<div class='caja-generos'>";

                for ( var f = 0, F = scope.coleccion.length; f < F; f++ ) {

                    vista += "<span class='label label-danger'>" + scope.coleccion[f].name + "</span>";
                }

                vista += "</div>";

                var nuevoElemento = angular.element( vista );
                var nuevoElementoCompilado = $compile( nuevoElemento )( scope );

                elemento.replaceWith( nuevoElementoCompilado );
            }
        }
    }]);