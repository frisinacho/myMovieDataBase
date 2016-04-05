
angular.module("misPelisSeriesApp").service("ApiService", ["$http", "configuracion", function($http, configuracion) {

    this.consultaApi = function( servicio ) {

        var url = "https://api.themoviedb.org/" +
            configuracion.apiVersion +
            "/" +
            servicio +
            "?api_key=" +
            configuracion.apiKey +
            "&language=es";

        return $http.get(url);
    };

    this.obtenerRutaImagen = function( tamanyo, ruta ) {

        return ruta == null ? null: configuracion.rutaImagenApi + tamanyo + ruta
    }

}]);