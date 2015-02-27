ViewModelIndex.prototype.constructor = ViewModelIndex;
 
function ViewModelIndex(proto) {
    this.Tempo = ko.observable();
    this.TempoTotal = ko.observable(0);
    this.TipoExercicio = ko.observableArray([
        "Corrida","Natacao","Bicicleta","Escalada","Caminhada","Academia","Artes Marciais"
    ]);
    this.Tipo = ko.observable();
    this.Data = ko.observable();
    this.Atividades = ko.observableArray();
    this.IdAtividade = 1;
    this.Titulos = ko.observableArray([
        {Descricao: 'Tempo', Width: '65px', Sort: false},
        {Descricao: 'Tipo', Width: '100px', Sort: false},
        {Descricao: 'Data', Width: '98px', Sort: false},
        {Descricao: 'Remover', Width: '80px', Sort: false}
    ]);
};

ViewModelIndex.prototype.AddNewExercise = function () {
    if(this.Tempo() != undefined && this.Tipo() != undefined && this.Data() != undefined){
        var regex = RegExp('[0-9]+');
        
        if (!regex.test(this.Tempo())) {
            alert("No campo tempo é permitido apenas números");
            return
        }

        var data = this.FormatarData(this.Data());
        this.Atividades.push({idatividade: this.IdAtividade, tempo: this.Tempo(), tipo: this.Tipo(), displaydata: data, data: this.Data()});
        this.TempoTotal(parseInt(this.TempoTotal()) + parseInt(this.Tempo()));
        this.IdAtividade++;
        this.Tempo('');
        this.Tipo('');
        this.Data('');
    } else{
        alert("Para adicionar atividade preencha todos os campos!");
    }
}

ViewModelIndex.prototype.RemoveExercise = function(exercicio) {
    this.Atividades.remove(exercicio);
};

ViewModelIndex.prototype.FormatarData = function(data) {
    var ano = data.substr(0, 4);
    var mes = data.substr(5, 2);
    var dia = data.substr(8, 2);
    return dia+"/"+mes+"/"+ano;
}

ViewModelIndex.prototype.OrdenarTabela = function(itemSelecionado) {
    var desc = itemSelecionado.Descricao.toLowerCase();
    
    if(itemSelecionado.Descricao == 'Remover')
        return;

    if(itemSelecionado.Sort){
        this.Atividades.sort(function(left, right) { return left[desc] == right[desc] ? 0 : (left[desc] > right[desc] ? -1 : 1) });
    } else{
        this.Atividades.sort(function(left, right) { return left[desc] == right[desc] ? 0 : (left[desc] < right[desc] ? -1 : 1) });
    }

    itemSelecionado.Sort = !itemSelecionado.Sort;
}