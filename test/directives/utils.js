function getChipScope(element, index) {
    var elements = element.find('chip-tmpl');
    index = index > 0 ? index : (index < 0 ? elements.length - 1 : 0)
    return angular.element(elements[index]).scope();
}