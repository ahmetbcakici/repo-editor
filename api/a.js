const axios = require('axios')
global.atob = require("atob");

async function getFiles(someUrl) {
  const { data: { tree } } = await axios.get(someUrl)
  tree.map((item) => {
    //console.log(item)
    if (item.type === 'tree') return getFiles(item.url)
    getBlobContent(item.url)

    // handle other types
  })
}

async function getBlobContent(someUrl) {
  const { data: { content } } = await axios.get(someUrl)
  //console.log(data)
  console.log(atob(content))
}
  
//getFiles('https://api.github.com/repos/ahmetbcakici/repo-editor/git/trees/44c3b1318cda3739a114ae92292e97b36aa98a5a')

console.log(atob('aW1wb3J0IGZhc3RpZnksIHtGYXN0aWZ5SW5zdGFuY2V9IGZyb20gJ2Zhc3Rp\nZnknOwppbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJzsKaW1wb3J0IHJl\ncXVlc3QgZnJvbSAncmVxdWVzdCc7Cgpjb25zdCBzZXJ2ZXI6IEZhc3RpZnlJ\nbnN0YW5jZSA9IGZhc3RpZnkoKTsKCnNlcnZlci5nZXQoJy9waW5nJywgYXN5\nbmMgKHJlcSwgcmVwbHkpID0+IHsKICAvKiBOT1Q6IDIgbm9ybWFsZGUgYmHF\nn2xhbmfEscOndMSxciBhbWEgc3ViIGZvbGRlcmxhcmRhIDMgYmHFn2xhbmfE\nscOndMSxciB6aXJhIDIgKC4uLikgw7xzdGUgw6fEsWvEscWfIHllcmlkaXIg\nKi8KICAvKiBjb25zb2xlLmxvZyhzaXRlQm9keS5maW5kKCcuY29tbWl0LWF1\ndGhvcicpLnRleHQoKSkgKi8KCiAgcmVxdWVzdCgnaHR0cHM6Ly9naXRodWIu\nY29tL2FobWV0YmNha2ljaS9mdWxsc3RhY2stc2xpZG8tY2xvbmUnLCBmdW5j\ndGlvbiAoCiAgICBlcnJvciwKICAgIHJlc3BvbnNlLAogICAgYm9keQogICkg\newogICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChib2R5KTsKICAgIGNvbnN0\nIHNpdGVCb2R5ID0gJCgnYm9keScpOwogICAgbGV0IGkgPSAyOwogICAgd2hp\nbGUgKHRydWUpIHsKICAgICAgbGV0IGl0ZW0gPSBzaXRlQm9keQogICAgICAg\nIC5maW5kKAogICAgICAgICAgYGRpdi5Cb3gtcm93Om50aC1jaGlsZCgke2l9\nKSA+IGRpdjpudGgtY2hpbGQoMikgPiBzcGFuOm50aC1jaGlsZCgxKWAKICAg\nICAgICApCiAgICAgICAgLnRleHQoKTsKICAgICAgICAKICAgICAgbGV0IGlz\nRm9sZGVyID0gc2l0ZUJvZHkKICAgICAgICAuZmluZCgKICAgICAgICAgIGBk\naXYuQm94LXJvdzpudGgtY2hpbGQoJHtpfSkgPiBkaXY6bnRoLWNoaWxkKDEp\nID4gc3ZnOm50aC1jaGlsZCgxKWAKICAgICAgICApCiAgICAgICAgLmhhc0Ns\nYXNzKCdvY3RpY29uLWZpbGUtZGlyZWN0b3J5Jyk7CiAgICAgIGlmICghaXRl\nbSkgYnJlYWs7CgogICAgICBjb25zb2xlLmxvZyhpc0ZvbGRlciwgaXRlbSk7\nCiAgICAgIGkrKzsKICAgIH0KICAgIC8qIHJldHVybiBjb25zb2xlLmxvZygK\nICAgICAgc2l0ZUJvZHkKICAgICAgICAuZmluZCgnZGl2LkJveC1yb3c6bnRo\nLWNoaWxkKDMpID4gZGl2Om50aC1jaGlsZCgyKSA+IHNwYW46bnRoLWNoaWxk\nKDEpJykKICAgICAgICAudGV4dCgpCiAgICApOyAqLwoKICAgIC8qIGNvbnNv\nbGUubG9nKHNpdGVCb2R5LmZpbmQoJ2Rpdi5EZXRhaWxzLWNvbnRlbnQtLWhp\nZGRlbi1ub3QtaW1wb3J0YW50Om50aC1jaGlsZCgxKScpLnRleHQoKSkgKi8K\nCiAgICAvKiBkaXYuQm94LXJvdzpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNo\naWxkKDIpID4gc3BhbjpudGgtY2hpbGQoMSkgKi8KICAgIC8qIGRpdi5Cb3gt\ncm93Om50aC1jaGlsZCgzKSA+IGRpdjpudGgtY2hpbGQoMikgPiBzcGFuOm50\naC1jaGlsZCgxKSAqLwogIH0pOwp9KTsKCnNlcnZlci5saXN0ZW4oODA4MCwg\nKGVyciwgYWRkcmVzcykgPT4gewogIGlmIChlcnIpIHsKICAgIGNvbnNvbGUu\nZXJyb3IoZXJyKTsKICAgIC8vcHJvY2Vzcy5leGl0KDEpOwogIH0KICBjb25z\nb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBhdCAke2FkZHJlc3N9YCk7Cn0p\nOwo=\n'))