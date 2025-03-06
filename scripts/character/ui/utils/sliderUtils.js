/**
 * Slider Utilities Module
 * 
 * Provides common utilities for slider components used across the UI.
 */

/**
 * Sets up a draggable slider with mouse and touch events
 * 
 * @param {HTMLElement} sliderTrack - The track element of the slider
 * @param {HTMLElement} sliderHandle - The handle/thumb element of the slider
 * @param {Function} onPositionChange - Callback function that receives the position (0-100)
 * @param {Function} onTrackClick - Optional callback for direct track clicks
 */
export function setupSliderEvents(sliderTrack, sliderHandle, onPositionChange, onTrackClick) {
    let isDragging = false;
    
    // Handle direct clicks on the track
    sliderTrack.addEventListener('mousedown', function(e) {
        const rect = sliderTrack.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        
        if (onTrackClick) {
            onTrackClick(position);
        } else {
            onPositionChange(position);
        }
    });
    
    // Handle drag start on the handle
    sliderHandle.addEventListener('mousedown', function(e) {
        isDragging = true;
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
        e.preventDefault(); // Prevent text selection during drag
    });
    
    // Handle mouse drag
    function handleDrag(e) {
        if (isDragging) {
            const rect = sliderTrack.getBoundingClientRect();
            let position = ((e.clientX - rect.left) / rect.width) * 100;
            
            // Constrain to track bounds
            position = Math.max(0, Math.min(100, position));
            
            onPositionChange(position);
        }
    }
    
    // Handle drag end
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
    }
    
    // Add touch support
    sliderTrack.addEventListener('touchstart', function(e) {
        const rect = sliderTrack.getBoundingClientRect();
        const touch = e.touches[0];
        const position = ((touch.clientX - rect.left) / rect.width) * 100;
        
        if (onTrackClick) {
            onTrackClick(position);
        } else {
            onPositionChange(position);
        }
        e.preventDefault();
    });
    
    // Handle touch drag start
    sliderHandle.addEventListener('touchstart', function(e) {
        isDragging = true;
        document.addEventListener('touchmove', handleTouchDrag);
        document.addEventListener('touchend', stopTouchDrag);
        e.preventDefault();
    });
    
    // Handle touch drag
    function handleTouchDrag(e) {
        if (isDragging) {
            const rect = sliderTrack.getBoundingClientRect();
            const touch = e.touches[0];
            let position = ((touch.clientX - rect.left) / rect.width) * 100;
            
            // Constrain to track bounds
            position = Math.max(0, Math.min(100, position));
            
            onPositionChange(position);
        }
    }
    
    // Handle touch drag end
    function stopTouchDrag() {
        isDragging = false;
        document.removeEventListener('touchmove', handleTouchDrag);
        document.removeEventListener('touchend', stopTouchDrag);
    }
} 