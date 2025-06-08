
// by convention, composable function names start with "use"
export function useFilterNumbers(row, columnId, filterValue) {

    if (!filterValue) return true; // Show all rows if no filter applied

    const rowValue = row.getValue(columnId)?.toString(); // Convert row value to string
    const filterString = filterValue.toString(); // Ensure filter is also a string
  
    return rowValue.startsWith(filterString); // Check if row value starts with the filter
    

}