var groupArrow = {
  up:    "img/ic_keyboard_arrow_up_black_24px.svg",
  down:  "img/ic_keyboard_arrow_down_black_24px.svg",
  right: "img/ic_keyboard_arrow_right_black_24px.svg"
};

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
        .append($("<p>").addClass("groupName")
          .append($("<img>").addClass("groupArrow").attr("src", groupArrow.down))
          .append(""+groupData.name))
        .append(groupContent);
}

function renderItem(itemData) {
    return $("<div/>")
        .addClass("item")
        .append($("<p>").addClass("itemName").val(itemData.name))
        .append(
            $("<div>")
                .addClass("itemContent")
                .append($("<img>").addClass("itemImg").attr("src", itemData.img))
                .append($("<a>")
                    .addClass("itemLink")
                    .attr("href", "http://" + itemData.link)
                    .html(itemData.link)
                )
        );
}

function setEventHandlers() {
    $(".groupName").on("click", function (event) {
        var group = $(this).closest(".group");
        var groupContent = group.find(".groupContent");
        groupContent.slideToggle("fast", function() {
          var isGroupVisible = (groupContent.css("display") != "none");
          group.find(".groupArrow").attr("src", isGroupVisible? groupArrow.down : groupArrow.right);
        });
    });
}


