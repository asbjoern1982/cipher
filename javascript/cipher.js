
$('#decrypt').mouseup(() => {
  let key = $('#key').val()
  let input = $('#text').val()
  let index = Math.round(input.split(' ', 1))
  let encryptedText = input.substr(input.indexOf(' ') + 1)

  let text = ''
  for (let i = 0; i < encryptedText.length; i++) {
    let char = encryptedText.charCodeAt(i) - key.charCodeAt(index + i)
    if (char < 0) {
      char += 10175
    }
    text += String.fromCharCode(char)
  }
  $('#index').val(index)
  $('#output').val(text)
})

$('#encrypt').mouseup(() => {
  let key = $('#key').val()
  let text = $('#text').val()
  let index = Math.round($('#index').val())

  if (key.length > text.length + index) {
    let encryptedText = index + ' '
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i) + key.charCodeAt(index + i)
      if (char > 10175) {
        char -= 10175
      }
      encryptedText += String.fromCharCode(char)
    }
    $('#index').val(text.length + index)
    $('#output').val(encryptedText)
  } else {
    console.log(key.length)
    console.log(index)
    console.log(text.length)
    alert('not enough key')
  }

})
