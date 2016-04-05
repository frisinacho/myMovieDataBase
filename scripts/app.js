
// Definimos nuestro módulo (aplicación) y sus dependencias.
angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

// Configuramos el routing de nuestra aplicación.
angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider) {

    // Definimos los distintos segmentos.
    $routeSegmentProvider.when("/peliculas", "peliculas");
    $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
    $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
    $routeSegmentProvider.when("/peliculas/detalles", "peliculas.detalles");
    $routeSegmentProvider.when("/series", "series");
    $routeProvider.otherwise({
        redirectTo: "/peliculas/proximamente"
    });

    // Establecemos qué controladores y vistas hay que usar en cada segmento.

    $routeSegmentProvider.segment("peliculas", {
        controller: "PeliculasCtrl",
        templateUrl: "views/Peliculas.html"
    });

    $routeSegmentProvider.within("peliculas").segment("proximamente", {
        controller: "PeliculasProximamenteCtrl",
        templateUrl: "views/PeliculasProximamente.html",
        resolve: {
            Peliculas: ["ApiService", function(ApiService) {
                return ApiService.consultaApi("movie/upcoming");
            }]
        },
        resolveFailed: [

        ]
    });

    $routeSegmentProvider.within("peliculas").segment("cartelera", {
        controller: "PeliculasCarteleraCtrl",
        templateUrl: "views/PeliculasCartelera.html",
        resolve: {
            Peliculas: ["ApiService", function(ApiService) {
                return ApiService.consultaApi("movie/now_playing");
            }]
        },
        resolveFailed: [

        ]
    });

    $routeSegmentProvider.within("peliculas").segment("detalles", {
        controller: "PeliculasDetallesCtrl",
        templateUrl: "views/PeliculasDetalles.html",
        resolve: {
            Pelicula: ["ApiService", "$routeParams", function(ApiService, $routeParams){
                return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
            }]
        }
    });

    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });
}]);