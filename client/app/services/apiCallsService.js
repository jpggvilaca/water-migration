angular.module('apiCalls', [])



    .factory('Api', function($http) {

        var ApiService = {};

        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

        ApiService.weatherCall = function(methodChosen, city, lat, lon) {
            urlResult = '';

            if( methodChosen == 'Cidade' ) {
              urlResult = 'http://api.openweathermap.org/data/2.5/weather?q='+ city + ',PT';
            } 
            if( methodChosen == 'Coordenadas' ) {
              urlResult = 'http://api.openweathermap.org/data/2.5/weather?'+'lat='+ lat +'&'+'lon='+ lon;
            }

            return $http.get(urlResult);
                
        }

        ApiService.octaveCall = function(data) {

            return $http.post('http://wp.watering.dev/process-data.php', data);

        }



        return ApiService;


    })