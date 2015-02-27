Index.prototype.constructor = Index;
 
function Index(proto) {
    this.Tempo = ko.observable();
    this.TempoTotal = ko.observable();
    this.TipoExercicio = ko.observableArray([
        { tipo: 'Corrida' },
        { tipo: 'Charles' },
        { tipo: 'Denise' }
    ]);
    //ko.observable("Corrida"),
    //{Tipo: "Natação"},
    //{Tipo: "Bicicleta"}
    //"Escalada","Caminhada","Academia","Artes Marciais"
    this.Tipo = ko.observable();
    this.Data = ko.observable();
    this.NewExercises = ko.observableArray();
};
 
Index.prototype.Init = function () {
    
};

Index.prototype.AddNewExercise = function () {
    //adicionar aos novos exercicios um exercicio e limpar as outras variaveis
    self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
}