function addItem() {
    var itemName = document.getElementById('item-name').value;
    var itemQuantity = document.getElementById('item-quantity').value;
  
    // Perform validation if needed
    if (itemName.trim() === '' || itemQuantity.trim() === '') {
      alert('Please enter an item name and quantity.');
      return;
    }
  
    // Create a new row for the item
    var itemTable = document.getElementById('item-table');
    var newRow = itemTable.insertRow();
  
    // Insert the item name cell
    var itemNameCell = newRow.insertCell();
    itemNameCell.textContent = itemName;
  
    // Insert the item quantity cell
    var itemQuantityCell = newRow.insertCell();
    itemQuantityCell.textContent = itemQuantity;
  
    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
  function updateItem() {
    var itemName = document.getElementById('item-name').value;
    var itemQuantity = document.getElementById('item-quantity').value;
  
    // Perform validation if needed
    if (itemName.trim() === '' || itemQuantity.trim() === '') {
      alert('Please enter an item name and quantity.');
      return;
    }
  
    // Get the table and its rows
    var itemTable = document.getElementById('item-table');
    var rows = itemTable.getElementsByTagName('tr');
  
    // Find the row with the matching item name
    var foundRow = null;
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var nameCell = row.cells[0];
      if (nameCell.textContent === itemName) {
        foundRow = row;
        break;
      }
    }
  
    if (foundRow) {
      // Update the item quantity
      var quantityCell = foundRow.cells[1];
      quantityCell.textContent = itemQuantity;
      console.log('Item updated:', itemName, itemQuantity);
    } else {
      console.log('Item not found:', itemName);
    }
  
    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
  function deleteItem() {
    var itemName = document.getElementById('item-name').value;
  
    // Perform validation if needed
    if (itemName.trim() === '') {
      alert('Please enter an item name.');
      return;
    }
  
    // Get the table and its rows
    var itemTable = document.getElementById('item-table');
    var rows = itemTable.getElementsByTagName('tr');
  
    // Find the row with the matching item name
    var foundRow = null;
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var nameCell = row.cells[0];
      if (nameCell.textContent === itemName) {
        foundRow = row;
        break;
      }
    }
  
    if (foundRow) {
      // Delete the item row
      itemTable.deleteRow(foundRow.rowIndex);
      console.log('Item deleted:', itemName);
    } else {
      console.log('Item not found:', itemName);
    }
  
    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
  function clearItems() {
    var itemTable = document.getElementById('item-table');
  
    // Delete all rows except the header row
    while (itemTable.rows.length > 1) {
      itemTable.deleteRow(1);
    }
  
    console.log('All items deleted.');
  
    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
        