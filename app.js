
function traceJson(inp) {
    $(document.body).append(
        $("<pre>")
            .addClass("sourceData")
            .html(JSON.stringify(inp, undefined, 2))
    );
}

function renderAll(data) {
    data.groups.forEach(function (groupData, groupIndex) {
        $(document.body).append(renderGroup(groupData));
    });
    setEventHandlers();
}

function renderGroup(groupData) {
    var groupContent = $("<div>").addClass("groupContent");

    groupData.items.forEach(function (itemData, itemIndex) {
        groupContent.append(renderItem(itemData));
    });

    return $("<div>")
        .addClass("group")
        .append($("<p>").addClass("groupName").html(groupData.name))
        .append(groupContent);
}

function renderItem(itemData) {
    return $("<div/>")
        .addClass("item")
        .append($("<p>").addClass("itemName").val(itemData.name))
        .append(
            $("<div>")
                .addClass("itemContent")
                .append($("<p>").addClass("itemImg").html(itemData.img))
                .append($("<p>").addClass("itemLink").html(itemData.link))
        );
}

function setEventHandlers() {
    $(".group").on("click", function (event) {
        $(this).find(".groupContent").fadeToggle();
    });
}
