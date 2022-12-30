const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

window.IntersectionObserver.prototype.observe = jest.fn();
window.IntersectionObserver.prototype.disconnect = jest.fn();
