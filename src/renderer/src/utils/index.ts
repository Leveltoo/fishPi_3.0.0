export const sendMessage = (order: string) => {
  console.log('触发')
  window.electron.ipcRenderer.send(order)
}
