angular.module('indexService', [])

    // Retrives the index of each correspondent field

    .factory('Index', function() {

        var IndexService = {};

        IndexService.getIndex = function(field, coeficient, chosenElement) {

            for (i = 0; i < field.length; i++) {
                if (chosenElement == field[i]) {
                  return i;
                }
            }

            return -1;

        };


        return IndexService;


    })