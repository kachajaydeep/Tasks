        function displayTable(data) {
            const tableBody = document.getElementById('tableBody');
            
            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="6" class="no-results">No employees found matching your criteria.</td></tr>';
                return;
            }
        }

        function updateResultsCount(count) {
            document.getElementById('resultsCount').textContent = `Showing ${count} of ${employees.length} employees`;
        }

        // Filter function
        function filterTable() {
            const nameFilter = document.getElementById('nameFilter').value.toLowerCase();
            const departmentFilter = document.getElementById('departmentFilter').value;
            const locationFilter = document.getElementById('locationFilter').value;
            const salaryFilter = parseInt(document.getElementById('salaryFilter').value) || 0;

            filteredEmployees = employees.filter(employee => {
                return (
                    employee.name.toLowerCase().includes(nameFilter) &&
                    (departmentFilter === '' || employee.department === departmentFilter) &&
                    (locationFilter === '' || employee.location === locationFilter) &&
                    employee.salary >= salaryFilter
                );
            });

            displayTable(filteredEmployees);
            updateResultsCount(filteredEmployees.length);
        }

        // Clear all filters
        function clearFilters() {
            document.getElementById('nameFilter').value = '';
            document.getElementById('departmentFilter').value = '';
            document.getElementById('locationFilter').value = '';
            document.getElementById('salaryFilter').value = '';
            
            filteredEmployees = [...employees];
            displayTable(filteredEmployees);
            updateResultsCount(filteredEmployees.length);
        }

        // Add event listeners
        document.getElementById('nameFilter').addEventListener('input', filterTable);
        document.getElementById('departmentFilter').addEventListener('change', filterTable);
        document.getElementById('locationFilter').addEventListener('change', filterTable);
        document.getElementById('salaryFilter').addEventListener('input', filterTable);

        // Initialize on page load
        initTable();
    </script>
</body>
</html>