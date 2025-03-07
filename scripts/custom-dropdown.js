// In a new file: custom-dropdown.js

function createCustomDropdown() {
    // Find all standard select elements
    const selects = document.querySelectorAll('select');
    
    selects.forEach(select => {
        // Create custom dropdown container
        const customDropdown = document.createElement('div');
        customDropdown.className = 'custom-dropdown';
        
        // Create selected display
        const selectedDisplay = document.createElement('div');
        selectedDisplay.className = 'selected-display';
        selectedDisplay.innerHTML = `
            <span>${select.options[select.selectedIndex]?.text || select.placeholder || "-- Select --"}</span>
            <i class="bx bx-chevron-down dropdown-arrow"></i>
        `;
        
        // Create dropdown list
        const dropdownList = document.createElement('div');
        dropdownList.className = 'dropdown-list suggestions-list';
        
        // Add options to dropdown list
        Array.from(select.options).forEach(option => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = option.text;
            item.dataset.value = option.value;
            
            item.addEventListener('click', () => {
                select.value = option.value;
                selectedDisplay.querySelector('span').textContent = option.text;
                dropdownList.style.display = 'none';
                // Trigger change event on original select
                select.dispatchEvent(new Event('change'));
            });
            
            dropdownList.appendChild(item);
        });
        
        // Toggle dropdown on click
        selectedDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownList.style.display === 'block';
            closeAllDropdowns();
            
            // Toggle dropdown arrow direction
            const arrow = selectedDisplay.querySelector('.dropdown-arrow');
            if (isOpen) {
                dropdownList.style.display = 'none';
                arrow.classList.remove('bx-chevron-up');
                arrow.classList.add('bx-chevron-down');
            } else {
                dropdownList.style.display = 'block';
                arrow.classList.remove('bx-chevron-down');
                arrow.classList.add('bx-chevron-up');
            }
        });
        
        // Add elements to container
        customDropdown.appendChild(selectedDisplay);
        customDropdown.appendChild(dropdownList);
        
        // Insert custom dropdown after select
        select.style.display = 'none';
        select.parentNode.insertBefore(customDropdown, select.nextSibling);
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', closeAllDropdowns);
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-list').forEach(list => {
        list.style.display = 'none';
    });
    
    // Reset all dropdown arrows
    document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
        arrow.classList.remove('bx-chevron-up');
        arrow.classList.add('bx-chevron-down');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createCustomDropdown);
