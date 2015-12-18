viewModel.panel.optionsWidth = ko.observableArray([
    { value: '', title: 'Select width' },
    { value: '1', title: 'col-1' },
    { value: '2', title: 'col-2' },
    { value: '3', title: 'col-3' },
    { value: '4', title: 'col-4' },
    { value: '5', title: 'col-5' },
    { value: '6', title: 'col-6' },
    { value: '7', title: 'col-7' },
    { value: '8', title: 'col-8' },
    { value: '9', title: 'col-9' },
    { value: '10', title: 'col-10' },
    { value: '11', title: 'col-11' },
    { value: '12', title: 'col-12' },
]);
viewModel.panel.form = ko.validatedObservable({
    title: ko.observable('').extend({ required: true }),
    width: ko.observable('').extend({ required: true })
});
viewModel.panel.iterator = ko.observable(1);
viewModel.panel.create = function () {
    if (!viewModel.panel.form.isValid()) {
        alert('some inputs have empty value!');
        return;
    }

    var id = "panel-" + viewModel.panel.iterator();
    var $columnEaciit = $(".column-eaciit");
    var $panel = $($("#template-panel").html());
    
    $panel.attr("id", id);
    $panel.attr("data-ss-colspan", viewModel.panel.form().width());
    $panel.prependTo($columnEaciit);
    
    $panel.find(".panel-title").html(viewModel.panel.form().title());
    
    viewModel.panel.iterator(viewModel.panel.iterator() + 1);
    viewModel.mode('');
    
    ko.applyBindings(viewModel, $panel[0]);
    
    $(".column-eaciit").shapeshift();
};
viewModel.panel.close = function (o) {
    $(o).closest(".panel-eaciit").remove();
};
viewModel.panel.collapse = function (o) {
    var $o = $(o).closest(".panel-eaciit"), 
        $a = $o.find("a"),
        $panelContent = $o.find(".panel-content");
    
    if ($(o).hasClass('fa-chevron-down')) {
        $(o).attr("class", "fa fa-chevron-up");
        $panelContent.show();
    } else {
        $(o).attr("class", "fa fa-chevron-down");
        $panelContent.hide();
    }
};