let ulTasks = $('#ulTasks')
let idAdd = $('#idAdd')
let idSort = $('#idSort')
let btnClear = $('#btnClear')
let btnDelete = $('#btnDelete')
let inpNewTask = $('#inpNewTask')

function deleteDone() {
    $('#ulTasks .done').remove()
    toggleInputButton()
}

function sortDone() {
    $('#ulTasks .done').appendTo(ulTasks)
}

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButton()
}
inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
})

function toggleInputButton() {

    btnClear.prop('disabled', inpNewTask.val() == '')
    idAdd.prop('disabled', inpNewTask.val() == '')
    idSort.prop('disabled', ulTasks.children().length < 1)
    btnDelete.prop('disabled', ulTasks.children().length < 1)

}
inpNewTask.on('input', toggleInputButton)
btnDelete.click(deleteDone)
idAdd.click(addItem)
idSort.click(sortDone)
btnClear.click(() => {
    inpNewTask.val('')
    toggleInputButton()
})