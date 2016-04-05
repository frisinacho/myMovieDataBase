
angular
    .module("misPelisSeriesApp")
    .controller("PeliculasProximamenteCtrl", ["$scope", "$filter", "Peliculas", "$location", function($scope, $filter, Peliculas, $location){

        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, ["release_date", "title"]);

        $scope.verDetalle = function( id ) {
            $location.path("/peliculas/detalles").search({
                idPelicula: id
            });
        };
}]);