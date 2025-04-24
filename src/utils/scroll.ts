/**
 * Smoothly scrolls to the element with the provided ID and updates the URL
 * @param elementId The ID of the element to scroll to (without the # prefix)
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Update the URL without triggering a page reload
    window.history.pushState({}, '', `/${elementId}`);
    
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Handles direct URL navigation with hashes
 * This should be called when the page loads to handle direct navigation to a section
 */
export const handleHashNavigation = (): void => {
  // Get the current path without the leading slash
  const path = window.location.pathname.substring(1);
  
  // If the path is not empty and matches a section ID, scroll to that section
  if (path) {
    scrollToElement(path);
  }
}; 