function shoppingList (event) {
 
    $("#js-shopping-list-form").submit(function (event) {
    
      let input = $("#shopping-list-entry").val();
    
      $("ul").append(`<li>
            <span class="shopping-item">${input}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>
          <li>`);
    
    $("#shopping-list-entry").val("");
              
              event.preventDefault();
    });
    
    $("#js-shopping-list-form").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#js-shopping-list-form").click();
        };
    });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) { $(this).closest('li').toggleClass('shopping-item__checked');
     });
    
     $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
       $(this).closest('li').remove();
     });
    
    }
    
    
    
    
    
    $(shoppingList);
    