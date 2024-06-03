export const sendMessage = (order: string | { key: string; value: string | boolean | number }) => {
  const isObject = typeof order === 'object'
  if (!isObject) {
    window.electron.ipcRenderer.send(order)
  } else {
    window.electron.ipcRenderer.send(order?.key, order?.value)
  }
}
