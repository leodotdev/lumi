/**
 * Smoothly scrolls to the element with the provided ID
 * @param elementId The ID of the element to scroll to (without the # prefix)
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}; 