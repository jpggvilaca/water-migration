angular.module("FieldsCtrl", ['apiCalls','indexService'])
    

    .controller('FieldController', function(Api, Index) {

        // Initializations

        this.fields = {
            "Months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            "Cultures": ["Algodão","Amendoim","Arroz","Banana","Batata","Beterraba","Cana-de-açucar","Cártamo","Cebola","Citrinos","Couve","Ervilha","Feijão","Feijão-verde","Girassol","Luzema","Melancia","Milho","Oliveira","Pimento","Soja","Sorgo","Tabaco","Tomate","Trigo","Vinha"],
            "Coeficients": [0.776,0.712,1.3,0.86,0.766,0.786,0.746,0.612,0.81,0.76,0.78,0.88,0.622,0.774,0.736,0.715,0.75,0.726,0.5,0.76,0.74,0.818,0.788,0.76,0.742,0.65],
            "TypeofWatering": ["Faixas","Canteiros","Sulcos","Gota-a-gota","Miniaspersão","Aspersão"],
            "WateringCoeficient": [0.57, 0.59, 0.58, 0.9, 0.85, 0.8]
        };

        this.methodChosen = '';
        this.lon = 0.0;
        this.lat = 0.0;
        this.city = '';
        this.plant = '';
        this.water = '';
        this.octaveData = JSON.stringify({
            "TypeofWatering": ["Faixas","Canteiros","Sulcos","Gota-a-gota","Miniaspersão","Aspersão"],
            "WateringCoeficient": [0.57, 0.59, 0.58, 0.9, 0.85, 0.8]
        });
        this.plantValue = 0;
        this.waterValue = 0;

        // Methods

        this.weather = function() {
            Api.weatherCall(this.methodChosen, this.city, this.lat, this.lon)
                .success(function(data) {
                    console.log(data);
                })
        };

        this.octave = function() {
            Api.octaveCall(this.octaveData)
                .success(function(data) {
                    console.log('Writing to file status: Success');
                });
        };

        this.plantCoeficient = function() {

            return Index.getIndex(this.fields.Cultures, this.fields.Coeficients, this.plant);

        };

        this.waterCoeficient = function() {

            return Index.getIndex(this.fields.TypeofWatering, this.fields.WateringCoeficient, this.water);

        };

    });
